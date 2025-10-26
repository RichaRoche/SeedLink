import React, { useEffect, useState, memo, useCallback, useMemo } from 'react'
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import {
    AiFillHeart,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { backend_url } from "../../../server";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../../redux/actions/wishlist';
import { addTocart } from '../../../redux/actions/cart';
import { toast } from 'react-toastify';
import Ratings from "../../Products/Ratings";

const ProductCard = memo(({ data, isEvent }) => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const { cart } = useSelector((state) => state.cart);
    const { seller } = useSelector((state) => state.seller);
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    
    const isOwnProduct = useMemo(() => 
        seller && data && seller._id === data.shop._id, 
        [seller, data]
    );

    const isInWishlist = useMemo(() => 
        wishlist && wishlist.find((i) => i._id === data._id), 
        [wishlist, data._id]
    );

    useEffect(() => {
        setClick(!!isInWishlist);
    }, [isInWishlist]);

    const removeFromWishlistHandler = useCallback(() => {
        setClick(!click);
        dispatch(removeFromWishlist(data));
    }, [click, dispatch, data]);

    const addToWishlistHandler = useCallback(() => {
        if (isOwnProduct) {
            toast.error("You cannot like your own product!");
            return;
        }
        setClick(!click);
        dispatch(addToWishlist(data));
    }, [isOwnProduct, click, dispatch, data]);

    const addToCartHandler = useCallback(() => {
        if (isOwnProduct) {
            toast.error("You cannot add your own product to cart!");
            return;
        }
        const isItemExists = cart && cart.find((i) => i._id === data._id);

        if (isItemExists) {
            toast.error("item already in cart!");
        } else {
            if (data.stock < 1) {
                toast.error("Product stock limited!");
            } else {
                const cartData = { ...data, qty: 1 };
                dispatch(addTocart(cartData));
                toast.success("Item added to cart Successfully!");
            }
        }
    }, [isOwnProduct, cart, data, dispatch]);

    const productLink = useMemo(() => 
        `${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`, 
        [data._id, isEvent]
    );

    const truncatedName = useMemo(() => 
        data.name.length > 40 ? data.name.slice(0, 40) + '...' : data.name, 
        [data.name]
    );

    return (
        <>
            <div className='w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
                <div className='flex justify-end'>
                </div>

                <Link to={productLink}>
                    <img
                        src={`${backend_url}${data.images && data.images[0]}`}
                        alt="prd"
                        className='w-full h-[170px] object-contain'
                        loading="lazy"
                    />
                </Link>
                <Link to={productLink}>
                    <h5 className={`${styles.shop_name}`} >{data.shop.name}</h5>
                </Link>
                <Link to={`/product/${data._id}`}>
                    <h4 className='pb-3 font-[500]'>
                        {truncatedName}
                    </h4>
                    {/* Star Rating */}
                    <div className='flex'>
                        <Ratings rating={data?.ratings} />
                    </div>

                    <div className='py-2 flex items-center justify-between'>
                        <div className='flex'>
                            <h5 className={`${styles.productDiscountPrice}`}>
                                ₹{data.originalPrice === 0 ? data.originalPrice : data.discountPrice}
                            </h5>

                            <h4 className={`${styles.price}`}>
                                {data.originalPrice ?"₹" + data.originalPrice  : null}
                            </h4>
                        </div>

                        <span className="font-[400] text-[17px] text-[#68d284]">
                            {data?.sold_out} sold
                        </span>
                    </div>
                </Link>

                {/* side option */}
                <div>
                    {
                        click ? (
                            <AiFillHeart
                                size={22}
                                className="cursor-pointer absolute right-2 top-5"
                                onClick={removeFromWishlistHandler}
                                color="red"
                                title='Remove from wishlist'
                            />
                        ) : (
                            <AiOutlineHeart
                                size={22}
                                className="cursor-pointer absolute right-2 top-5"
                                onClick={addToWishlistHandler}
                                color="#333"
                                title='Add to wishlist'
                            />
                        )}
                    <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-2 top-14"
                        onClick={() => setOpen(!open)}
                        color="#333"
                        title='Quick view'
                    />

                    <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24"
                        onClick={addToCartHandler}
                        color="#444"
                        title='Add to cart'
                    />
                    {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
                </div>
            </div>
        </>
    )
}, (prevProps, nextProps) => {
    return prevProps.data._id === nextProps.data._id && 
           prevProps.isEvent === nextProps.isEvent;
});

ProductCard.displayName = 'ProductCard';

export default ProductCard
