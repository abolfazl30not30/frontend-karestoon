import React from 'react';
import Header from "./Header";
import img1 from "../../../assets/img/about_img2.png"
import img2 from "../../../assets/img/slider_1.jpg"
import img3 from "../../../assets/img/my-wish-for-you-1600x900-1.jpg"
import heroLine1 from '../../../assets/img/hero/hero-line.png'
import heroLine2 from '../../../assets/img/hero/hero-line-2.png'
import heroTwoImg from '../../../assets/img/hero/hero-one-small.jpg'

function HeroArea2() {

    return (
        <>
            <section className="hero-area-one">
                <div className="hero-text">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <span className="tagline wow fadeInUp" data-wow-delay="0.3s">مجموعه مردم نهاد</span>
                                <h1 className="title wow fadeInUp" data-wow-delay="0.4s">همه با هم ، برای کمک</h1>
                                <a href="project-1.html" className="main-btn wow fadeInUp" data-wow-delay="0.5s">
                                    پروژه های ما <i className="far fa-arrow-left"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hero-shapes">
                        <div className="hero-line-one">
                            <img src={heroLine1} alt="Line"/>
                        </div>
                        <div className="hero-line-two">
                            <img src={heroLine2} alt="Line"/>
                        </div>
                        <div className="dot-one"></div>
                        <div className="dot-two"></div>
                    </div>
                </div>
                <div className="hero-images">
                    <div className="hero-img image-small fancy-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <img src={img1} alt="Image"/>
                    </div>
                    <div className="hero-img main-img wow fadeInUp" data-wow-delay="0.5s">
                        <img src={img2} alt="Image"/>
                    </div>
                    <div className="hero-img image-small fancy-top wow fadeInRight" data-wow-delay="0.7s">
                        <img src={img3} alt="Image"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroArea2