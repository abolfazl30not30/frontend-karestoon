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
import {useNavigate} from "react-router-dom";
import api from "../../api/api";


const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function ResetPassword() {
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleResetPassword = async () => {
        await api.post("register/updatePassword", {
            phoneNumber: localStorage.getItem("phoneNumber"),
            password: password
        }).then(() => navigate("/enter-password"))
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="signup-box">
                    <div className="d-flex flex-md-row flex-column">
                        <div className="col-md-6 col-12">
                            <div className="signup-box-content">
                                <h2 className='signup-box-title'>بازنشانی رمز عبور</h2>
                                <CacheProvider value={cacheRtl}>
                                    <div className="d-flex flex-column px-3">
                                        <TextField label="رمز عبور جدید" type='number' className='mb-3'
                                                   onChange={(e) => setPassword(e.target.value)}
                                                   value={password}/>


                                        <button className='login-btn' onClick={handleResetPassword}>بازیابی</button>
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

export default ResetPassword