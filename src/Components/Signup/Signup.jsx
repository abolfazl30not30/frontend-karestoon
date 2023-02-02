import '../../assets/css/signup.css'
import '../../assets/css/main.css'
import pic from '../../assets/img/login-pic.jpg'
import backPic from '../../assets/img/hero/hero-line-2.png'
import React from "react";

const Signup = () => {
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
                                <small className={'text-nowrap mt-4 mb-5'}>
                                    به خیریه سلام خوش آمدید!
                                </small>
                            </div>

                            <div className={'d-flex justify-content-center mb-5'}>
                                <input
                                    className={'input w-75'}
                                    placeholder={'شماره همراه'}
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

export default Signup;