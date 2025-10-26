import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ShopCreateForm from "../components/Shop/ShopCreate";

const ShopCreatePage = () => {
    const navigate = useNavigate();
    const { isSeller, seller } = useSelector((state) => state.seller);
    
    // if user is login then redirect to home page
    useEffect(() => {
        if (isSeller === true) {
            navigate(`/shop/${seller._id}`);
        }
    }, [isSeller, navigate, seller]);
    
    return (
        <div>
            <ShopCreateForm />
        </div>
    )
}

export default ShopCreatePage