import '../../assets/css/signup.css'
import '../../assets/css/main.css'
import pic from '../../assets/img/login-pic.jpg'
import backPic from '../../assets/img/hero/hero-line-2.png'
import OtpInput from 'react-otp-input';
import React, {useState} from "react";

const Login = () => {

    const [mobileNumber, setMobileNumber] = useState('09123456789')
    const [otp, setOtp] = useState('')

    const handleChange = (otp) => {
        setOtp(otp)
    }

    return (
        <>
            <div className={'main-container'}>
                <div className={'container1 d-flex'}>
                    <div className={'input-container col-6 d-flex'}>

                        <div className={'col-12'}>
                            <div className={'back-pic'}>
                                <img src={backPic} alt={'backPic'}/>
                            </div>
                            <div className={'d-flex justify-content-center'}>
                                <h2 className={'text-nowrap mt-4'}>
                                    Salam Charity
                                </h2>
                            </div>

                            <div className={'d-flex justify-content-center'}>
                                <small className={'mt-4 mb-5 text-center'}>
                                    حساب کاربری با شماره موبایل {mobileNumber} وجود ندارد. برای ساخت حساب جدید کد تایید برای این شماره ارسال گردید.
                                </small>
                            </div>

                            <div className={'d-flex justify-content-center mb-5'}>
                                {/*<input*/}
                                {/*    type={'number'}*/}
                                {/*    className={'input w-75'}*/}
                                {/*    placeholder={'کد'}*/}
                                {/*/>*/}

                                <OtpInput
                                    value={otp}
                                    onChange={handleChange}
                                    numInputs={4}
                                    separator={<span className={'mx-2'}/>}
                                    className={'otp'}
                                />

                            </div>

                            <div className={'d-flex justify-content-center'}>
                                <a href="#" className="main-btn mt-10">ورود <i
                                    className="far fa-arrow-left"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={'col-6'}>
                        <img src={pic} alt={'pic'} className={'login-img'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;