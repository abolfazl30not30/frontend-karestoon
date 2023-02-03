import React from 'react';
import projectImg1 from "../../../assets/img/my-wish-for-you-1600x900-1.jpg"
import projectImg2 from "../../../assets/img/bazgasht-be-zandegi-150.jpg"
import projectImg3 from "../../../assets/img/divarmehrabani.jpg"

import Slider from "react-slick";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Link} from "react-router-dom"
function Project() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable:true,
        autoplay:true,
        arrows:false,
        autoplaySpeed:1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="project-section project-section-extra-gap secondary-bg">
                <div className="container-fluid fluid-extra-padding">
                    <div className="common-heading text-center color-version-white mb-60">
				<span className="tagline">
					 پروژه های محبوب <i className="fas fa-plus"></i>
					<span className="heading-shadow-text">پروژه های ما</span>
				</span>
                        <h2 className="title">تامین مالی جمعی</h2>
                    </div>
                    <div className="row project-slider-one project-items project-style-one no-shadow">
                        <Slider {...settings}>
                            <div className="px-3 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg1})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">تامين مالي جمعي</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="">بازگشت به زندگی</a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value">150,000,000 تومان</span>
                                                <span className="value-title">: مبلغ مورد نياز</span>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <span className="value-title">: مبلغ حمايت شده</span>
                                            </div>

                                            <div className="stats-bar" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                        <div className="mt-4 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg2})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">تامين مالي جمعي</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="">بازگشت به زندگی</a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value">150,000,000 تومان</span>
                                                <span className="value-title">: مبلغ مورد نياز</span>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <span className="value-title">: مبلغ حمايت شده</span>
                                            </div>

                                            <div className="stats-bar" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                        <div className="mt-4 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg3})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">تامين مالي جمعي</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="">بازگشت به زندگی</a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value">150,000,000 تومان</span>
                                                <span className="value-title">: مبلغ مورد نياز</span>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <span className="value-title">: مبلغ حمايت شده</span>
                                            </div>

                                            <div className="stats-bar" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                        <div className="mt-4 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg1})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">تامين مالي جمعي</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="">بازگشت به زندگی</a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value">150,000,000 تومان</span>
                                                <span className="value-title">: مبلغ مورد نياز</span>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <span className="value-title">: مبلغ حمايت شده</span>
                                            </div>

                                            <div className="stats-bar" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                        <div className="mt-4 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg1})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">تامين مالي جمعي</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="">بازگشت به زندگی</a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value">150,000,000 تومان</span>
                                                <span className="value-title">: مبلغ مورد نياز</span>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <span className="value-title">: مبلغ حمايت شده</span>
                                            </div>

                                            <div className="stats-bar" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                        <div className="mt-4 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project