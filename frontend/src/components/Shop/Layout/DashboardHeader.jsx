import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";
import logo from '../../assets/logo.svg';

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);

  return (
    <div className="w-full h-[80px] bg-[#4BAF47] shadow sticky top-0 left-0 z-30 flex items-center justify-between px-6">
      {/* Logo with padding */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[80px] w-auto" />
        </Link>
      </div>

      {/* Icons and profile */}
      <div className="flex items-center space-x-4">
        <Link to="/dashboard/coupons" className="800px:block hidden">
          <AiOutlineGift color="#555" size={30} className="cursor-pointer" />
        </Link>
        <Link to="/dashboard-events" className="800px:block hidden">
          <MdOutlineLocalOffer color="#555" size={30} className="cursor-pointer" />
        </Link>
        <Link to="/dashboard-products" className="800px:block hidden">
          <FiShoppingBag color="#555" size={30} className="cursor-pointer" />
        </Link>
        <Link to="/dashboard-orders" className="800px:block hidden">
          <FiPackage color="#555" size={30} className="cursor-pointer" />
        </Link>
        <Link to="/dashboard-messages" className="800px:block hidden">
          <BiMessageSquareDetail color="#555" size={30} className="cursor-pointer" />
        </Link>

        {/* Seller avatar */}
        <Link to={`/shop/${seller._id}`}>
          <img
            src={`${backend_url}${seller.avatar}`}
            alt="Profile"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
