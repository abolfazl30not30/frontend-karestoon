import React, {useState} from 'react';
import projectImg1 from "../../../assets/img/my-wish-for-you-1600x900-1.jpg"
import projectImg2 from "../../../assets/img/bazgasht-be-zandegi-150.jpg"
import projectImg3 from "../../../assets/img/divarmehrabani.jpg"

import Slider from "react-slick";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Link} from "react-router-dom"
import {BsHeart} from "react-icons/bs"
import {BsHeartFill} from "react-icons/bs"
import {GiCash} from "react-icons/gi"
import {BsCash} from "react-icons/bs"
function Project() {
    const [isLiked,setIsLiked] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable:true,
        autoplay:false,
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

    function toggleLikeBtn(){
        if(isLiked){
            setIsLiked(false)
        }else{
            setIsLiked(true)
        }
    }

    return (
        <>
            <section className="project-section project-section-extra-gap secondary-bg">
                <div className="container-fluid fluid-extra-padding">
                    <div className="common-heading text-center color-version-white mb-60">
				<span className="tagline">
					 پروژه های محبوب <i className="fas fa-plus"></i>
					<span className="heading-shadow-text">پروژه های ما</span>
				</span>
                        <h2 className="title">پروژه های ما را کاوش کنید</h2>
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
                                                <div className="d-flex align-items-center">
                                                    <span className="value-title mx-2">: مبلغ مورد نياز</span>
                                                    <BsCash color="#5f5f5f"/>
                                                </div>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <div className="d-flex align-items-center">
                                                    <span className="value-title mx-2">: مبلغ حمايت شده</span>
                                                    <GiCash color="#5f5f5f"/>
                                                </div>
                                            </div>

                                            <div className="stats-bar mt-4" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                        <div className="mt-4  d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <button onClick={toggleLikeBtn} >{isLiked ? <BsHeartFill color="#dc3545" fontSize="1.2rem"/> :
                                                    <BsHeart fontSize="1.2rem"/> }</button>
                                                <span className="mx-1">142</span>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
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
                                                <div className="d-flex align-items-center">
                                                    <span className="value-title mx-2">: مبلغ مورد نياز</span>
                                                    <BsCash color="#5f5f5f"/>
                                                </div>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <div className="d-flex align-items-center">
                                                    <span className="value-title mx-2">: مبلغ حمايت شده</span>
                                                    <GiCash color="#5f5f5f"/>
                                                </div>
                                            </div>

                                            <div className="stats-bar mt-4" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                        <div className="mt-4  d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <button onClick={toggleLikeBtn} >{isLiked ? <BsHeartFill color="#dc3545" fontSize="1.2rem"/> :
                                                    <BsHeart fontSize="1.2rem"/> }</button>
                                                <span className="mx-1">142</span>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
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
                                                <div className="d-flex align-items-center">
                                                    <span className="value-title mx-2">: مبلغ مورد نياز</span>
                                                    <BsCash color="#5f5f5f"/>
                                                </div>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <div className="d-flex align-items-center">
                                                    <span className="value-title mx-2">: مبلغ حمايت شده</span>
                                                    <GiCash color="#5f5f5f"/>
                                                </div>
                                            </div>

                                            <div className="stats-bar mt-4" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                        <div className="mt-4  d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <button onClick={toggleLikeBtn} >{isLiked ? <BsHeartFill color="#dc3545" fontSize="1.2rem"/> :
                                                    <BsHeart fontSize="1.2rem"/> }</button>
                                                <span className="mx-1">142</span>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
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
                                                <div className="d-flex align-items-center">
                                                    <span className="value-title mx-2">: مبلغ مورد نياز</span>
                                                    <BsCash color="#5f5f5f"/>
                                                </div>
                                            </div>
                                            <div className="stats-value">
                                                <span className="value">15,000,000 تومان</span>
                                                <div className="d-flex align-items-center">
                                                    <span className="value-title mx-2">: مبلغ حمايت شده</span>
                                                    <GiCash color="#5f5f5f"/>
                                                </div>
                                            </div>

                                            <div className="stats-bar mt-4" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`} />
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-center">
                                            <a href="#" className={"main-btn px-5"} >حمايت ميكنم</a>
                                        </div>
                                        <div className="mt-4  d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <button onClick={toggleLikeBtn} >{isLiked ? <BsHeartFill color="#dc3545" fontSize="1.2rem"/> :
                                                    <BsHeart fontSize="1.2rem"/> }</button>
                                                <span className="mx-1">142</span>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
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