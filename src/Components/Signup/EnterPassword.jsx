import * as React from 'react';
import "./../../style/Signup.css"
import SignInImage from "./../../assets/img/SignUp/login.jpg"
import TextField from '@mui/material/TextField';
import {createTheme} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import LoginApi from "../../api/LoginApi";



const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function EnterPassword() {
    const [password,setPassword] = useState('')
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    const handleEnterPassword = async () => {
        await LoginApi({
            password: password
        }).then(() => navigate("/dashboard/projects")).catch(() => setError(["رمز عبور نامعتبر است."]))
    }
    const handleResetPassword = async () => {
        const forgotPasswordResponse = await api.post("register/forgotPassword", {phoneNumber:localStorage.getItem("phoneNumber")})
        if (forgotPasswordResponse.data.status === "OTPSent") {
            localStorage.setItem("forgotPassword", "true")
            navigate("/OTP");
        } else if (forgotPasswordResponse.data.status === "newUser") {
            navigate("/sign-in")
        }

    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="signup-box">
                    <div className="d-flex flex-md-row flex-column">
                        <div className="col-md-6 col-12">
                            <div className="signup-box-content">
                                <h2 className='signup-box-title'>رمز عبور</h2>
                                <CacheProvider value={cacheRtl}>
                                    <div className="d-flex flex-column px-3">
                                        <TextField label="رمز عبور" type='number' className='mb-3'
                                                   onChange={(e) => setPassword(e.target.value)}/>
                                        {
                                            error.map((err, index) =>
                                                <small className={"text-danger"} key={index}>{err}</small>
                                            )
                                        }
                                        <div
                                            onClick={handleResetPassword}
                                            style={{fontSize:'12px',color:'#444',margin:'.5rem 0',cursor:"pointer"}}
                                        >
                                            رمز عبور خود را فراموش کرده اید ؟
                                        </div>

                                        <button className='login-btn' onClick={handleEnterPassword}>ورود</button>
                                        <div className='text-center mt-4'>
                                            بازگشت به سایت
                                            <KeyboardBackspaceIcon className="me-2"/>
                                        </div>
                                    </div>
                                </CacheProvider>

                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="signup-box-image" style={{backgroundImage: `url(${SignInImage})`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnterPassword