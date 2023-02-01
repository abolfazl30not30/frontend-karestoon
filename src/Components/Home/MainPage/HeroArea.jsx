import React from 'react';
import Header from "./Header";
import heroLine2 from '../../../assets/img/hero/hero-line-3.png'
import heroTwoImg from '../../../assets/img/hero/hero-one-small.jpg'

function MainPage() {

    return (
        <>
            <section className="hero-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-11">
                            <div className="hero-text">
                                <h1 className="title wow fadeInLeft" data-wow-delay="0.2s">
                                    ما در با خانمان دست یاری شما هستیم…
                                </h1>
                                <p className="wow fadeInLeft text-right" data-wow-delay="0.3s">
                                    باخانمان یک شرکت غیرانتفاعی و مستقل است. این شرکت فعالیت خود را از سال 1398 آغاز کرده است. این شرکت اولین شرکت خیریه ای در حوزه تامین مالی جمعی و تامین تخصص جمعی در ایران است. خیرین و متخصصان متناسب با توان خود در طرح های معرفی شده از این شرکت فعالیت می کنند.
                                </p>
                                <ul className="hero-btn">
                                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="#" className="main-btn">مشاهده طرح ها <i
                                            className="far fa-arrow-left"></i></a>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.5s">
                                        <a href="#" className="video-btn"
                                           data-lity><i className="fas fa-play"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center col-lg-6 col-md-8 col-sm-10 mx-auto wow fadeInRight" data-wow-delay="0.2s">
                            <div className=" hero-img image-small fancy-bottom wow fadeInLeft" data-wow-delay="0.6s">
                                <img src={heroTwoImg} alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shapes">
                    <div className="hero-line-one">
                        <img src={heroLine2} alt="Line"/>
                    </div>
                    <div className="hero-line-two">
                        <img src={heroLine2} alt="Line"/>
                    </div>
                    <div className="dot-one"></div>
                    <div className="dot-two"></div>
                </div>
            </section>
        </>
    );
}

export default MainPage