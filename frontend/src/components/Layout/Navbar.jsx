import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={`flex ${styles.normalFlex} space-x-6`}>
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.url;
        return (
          <Link
            to={item.url}
            key={index}
            className={`${
              isActive ? "text-[#17dd1f]" : "text-black 800px:text-[#000]"
            } pb-[5px] font-medium cursor-pointer hover:text-[#17dd1f]`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
