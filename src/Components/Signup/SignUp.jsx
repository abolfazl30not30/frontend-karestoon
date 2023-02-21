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
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as yup from 'yup';


const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function SignUp() {
    const [phoneNumber, updatePhoneNumber] = useState('09335137958')
    const [newUser, updateNewUser] = useState({
        name: '',
        family: '',
        password: ''
    });
    const navigate = useNavigate();
    const onChangeInput = (e) => {
        updateNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    const handleSignUpUser = () => {
        navigate("/dashboard");
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="signup-box">
                    <div className="d-flex flex-md-row flex-column">
                        <div className="col-md-6 col-12">
                            <div className="signup-box-content">
                                <h2 className='signup-box-title'>ثبت نام</h2>
                                <CacheProvider value={cacheRtl}>
                                    <div className="d-flex flex-column px-3">
                                        {/*Phone Number*/}
                                        <TextField label="شماره موبایل" disabled={true} type='number'
                                                   value={phoneNumber} className='mb-3'
                                        />
                                        {/*Name*/}
                                        <TextField label="نام" type='text' className='mb-3'
                                                   name='name'
                                                   value={newUser.name}
                                                   onChange={onChangeInput}
                                        />
                                        {/*Family*/}
                                        <TextField label="نام خانوادگی" type='text' className='mb-3'
                                                   name='family'
                                                   value={newUser.family}
                                                   onChange={onChangeInput}
                                        />
                                        {/*Password*/}
                                        <TextField label="رمز عبور" type='text' className='mb-3'
                                                   name='password'
                                                   value={newUser.password}
                                                   onChange={onChangeInput}
                                        />
                                        <button className='login-btn'
                                                onClick={handleSignUpUser}
                                        >
                                            عضویت
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

export default SignUp