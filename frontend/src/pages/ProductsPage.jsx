import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import AIButton from "../components/ai/AIButton";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    let filteredProducts = allProducts;

    // Filter by search query if provided
    if (searchQuery) {
      filteredProducts = allProducts && allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category if provided
    if (categoryData) {
      filteredProducts = filteredProducts && filteredProducts.filter((i) => i.category === categoryData);
    }

    setData(filteredProducts);
    window.scrollTo(0, 0);
  }, [allProducts, searchQuery, categoryData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            {searchQuery && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <h2 className="text-lg font-semibold text-gray-800">
                  🔍 Search Results for: <span className="text-green-600">"{searchQuery}"</span>
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Found {data?.length || 0} product{data?.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No products Found!
              </h1>
            ) : null}
          </div>
          <AIButton/>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
