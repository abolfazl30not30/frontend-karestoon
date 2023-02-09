import * as React from 'react';
import "./../../style/Signup.css"
import SignInImage from "./../../assets/img/SignUp/login.jpg"
import TextField from '@mui/material/TextField';
import {createTheme} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useState} from "react";
import { useNavigate } from "react-router-dom";



const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function SignIn() {
    const [phoneNumber, updatePhoneNumber] = useState('')
    const [error,updateError] = useState('')
    const navigate = useNavigate();

    const handleGetPhoneNumber = () => {
        const regex = new RegExp('^(\\+98|0)?9\\d{9}$');
        let result = regex.test(phoneNumber);

        /*Validate Phone Numbers*/
        if (result === true) {
            const existNumber = true;
            /*Exist Number*/
            if (existNumber === true) {
                navigate("/enter-password");
            } else {
                navigate("/OTP");
            }
        } else {
            updateError('شماره موبایل نامعتبر است')
        }

    }



    return (
        <>
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="signup-box">
                    <div className="d-flex flex-md-row flex-column">
                        <div className="col-md-6 col-12">
                            <div className="signup-box-content">
                                <h2 className='signup-box-title'>ورود</h2>
                                <CacheProvider value={cacheRtl}>
                                    <div className="d-flex flex-column px-3">
                                        <TextField label="شماره موبایل" type='number' className='mb-3'
                                                   onChange={(e) => updatePhoneNumber(e.target.value)}/>
                                        {
                                            error.length !== 0
                                            ? (
                                                <div className='error-message'>{error}</div>
                                                )
                                            : (null)
                                        }
                                        <button className='login-btn' onClick={handleGetPhoneNumber}>
                                            ورود/عضویت
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

export default SignIn