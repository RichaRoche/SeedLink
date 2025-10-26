import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { server } from "../server";
import axios from 'axios';



const ActivationPage = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios
                        .post(`${server}/user/activation`, {
                            activation_token
                        })
                    // Success - user will be redirected automatically
                    console.log(res.data.message);
                } catch (err) {
                    console.log("Activation error:", err.response?.data?.message || err.message);
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
                        <p className='text-red-800 text-2xl font-bold mb-4'>Your activation link has expired</p>
                        <p className='text-gray-600'>Please register again to receive a new activation link.</p>
                    </div>
                ) : (
                    <div className='text-center'>
                        <p className='text-green-800 text-2xl font-bold mb-4'>Your Account has been created successfully!</p>
                        <p className='text-gray-600'>You can now log in to your account.</p>
                    </div>
                )
            }

        </div>
    )
}

export default ActivationPage