import * as React from 'react';
import "./../../style/Signup.css"
import SignInImage from "./../../assets/img/SignUp/login.jpg"
import {createTheme} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import OtpField from 'react-otp-field';
import api from "../../api/api";
import axios from "axios";

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function OTP() {
    const [otp, updateOtp] = useState('');
    const [error, updateError] = useState('');
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);
    const handleConfirmationOtp = async () => {
        console.log(localStorage.getItem("edw"))
        if (localStorage.getItem("forgotPassword") === null) {

            const otpResponse = await axios.post("http://localhost:8099/api/v1/register/verify/checkOTP", {
                phoneNumber: localStorage.getItem("phoneNumber"),
                otp: otp
            }).then(() => (navigate("/sign-up")))
                .catch(() => updateError('کد تایید نامعتبر می باشد'))

        } else if (localStorage.getItem("forgotPassword") === "true") {

            axios.post("http://localhost:8099/api/v1/register/forgotPassword/checkOTP", {
                phoneNumber: localStorage.getItem("phoneNumber"),
                otp: otp
            }).then(() => {
                navigate("/reset-password")
                localStorage.removeItem("forgotPassword")
            })
                .catch(() => updateError('کد تایید نامعتبر می باشد'))
        }

    }
    const resendOTP = () => {
        setMinutes(1);
        setSeconds(30);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="signup-box">
                    <div className="d-flex flex-md-row flex-column">
                        <div className="col-md-6 col-12">
                            <div className="signup-box-content">
                                <h2 className='signup-box-title'>کد تایید</h2>
                                <CacheProvider value={cacheRtl}>
                                    <div className="d-flex flex-column px-3">
                                        <OtpField
                                            value={otp}
                                            onChange={updateOtp}
                                            numInputs={6}
                                            onChangeRegex={/^([0-9]{0,})$/}
                                            autoFocus
                                            separator={<span>-</span>}
                                            isTypeNumber
                                            inputProps={{className: 'otp-field__input', disabled: false}}
                                        />


                                        <div
                                            className="d-flex flex-row justify-content-between align-items-center my-3">
                                            {seconds > 0 || minutes > 0 ? (
                                                <div>
                                                    زمان باقی مانده: {minutes < 10 ? `0${minutes}` : minutes}:
                                                    {seconds < 10 ? `0${seconds}` : seconds}
                                                </div>
                                            ) : (
                                                <div>کد دریافت نکردید؟</div>
                                            )}
                                            <button
                                                className='sent-otp-btn'
                                                disabled={seconds > 0 || minutes > 0}
                                                onClick={resendOTP}
                                            >
                                                ارسال مجدد
                                            </button>
                                        </div>

                                        {
                                            error.length !== 0
                                                ? (
                                                    <div className='error-message'>{error}</div>
                                                )
                                                : (null)
                                        }
                                        <button className='login-btn'
                                                onClick={handleConfirmationOtp}
                                        >
                                            تایید
                                        </button>
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

export default OTP