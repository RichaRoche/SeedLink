import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { server } from "../server";
import axios from 'axios';


const SellerActivationPage = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Your activation link has expired");

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios
                        .post(`${server}/shop/activation`, {
                            activation_token
                        })
                    // Success - user will be redirected automatically
                } catch (err) {
                    console.log("Activation error:", err.response?.data?.message || err.message);
                    const errorMsg = err.response?.data?.message || "Your activation link has expired";
                    setErrorMessage(errorMsg);
                    setError(true);
                }
            }
            activationEmail();
        }

    }, [activation_token]);

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            {
                error ? (
                    <div className='text-center'>
                        <p className='text-red-800 text-2xl font-bold mb-4'>Activation Failed</p>
                        <p className='text-red-600 mb-4'>{errorMessage}</p>
                        <p className='text-gray-600'>Please register again to receive a new activation link.</p>
                    </div>
                ) : (
                    <div className='text-center'>
                        <p className='text-green-800 text-2xl font-bold mb-4'>Your Seller Account has been created successfully!</p>
                        <p className='text-gray-600'>You can now log in to your seller dashboard.</p>
                    </div>
                )
            }

        </div>
    )
}

export default SellerActivationPage




