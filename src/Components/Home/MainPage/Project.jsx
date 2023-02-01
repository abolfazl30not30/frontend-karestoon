import React from 'react';
import projectImg1 from "../../../assets/img/project/project-grid-01.jpg"
import img1 from "../../../assets/img/author-thumbs/01.jpg"
import Slider from "react-slick";

function Project() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable:true,
        autoplay:true,
        autoplaySpeed:3000,
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
                    slidesToScroll: 21,
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
                                            <a href="#">ویدیو و فیلم</a>
                                        </div>
                                        <div className="author">
                                            <img src={img1} alt="Thumb"/>
                                            <a href="#">جیمز بارو</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="project-details.html">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                از
                                                صنعت </a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value-title"> <span
                                                    className="value">10,000 تومان</span> : هدف</span>
                                                <span className="stats-percentage">79%</span>
                                            </div>
                                            <div className="stats-bar" data-value="79">
                                                <div className="bar-line"></div>
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg1})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">ویدیو و فیلم</a>
                                        </div>
                                        <div className="author">
                                            <img src={img1} alt="Thumb"/>
                                            <a href="#">جیمز بارو</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="project-details.html">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                از
                                                صنعت </a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value-title"> <span
                                                    className="value">10,000 تومان</span> : هدف</span>
                                                <span className="stats-percentage">79%</span>
                                            </div>
                                            <div className="stats-bar" data-value="79">
                                                <div className="bar-line"></div>
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg1})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">ویدیو و فیلم</a>
                                        </div>
                                        <div className="author">
                                            <img src={img1} alt="Thumb"/>
                                            <a href="#">جیمز بارو</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="project-details.html">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                از
                                                صنعت </a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value-title"> <span
                                                    className="value">10,000 تومان</span> : هدف</span>
                                                <span className="stats-percentage">79%</span>
                                            </div>
                                            <div className="stats-bar" data-value="79">
                                                <div className="bar-line"></div>
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg1})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">ویدیو و فیلم</a>
                                        </div>
                                        <div className="author">
                                            <img src={img1} alt="Thumb"/>
                                            <a href="#">جیمز بارو</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="project-details.html">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                از
                                                صنعت </a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value-title"> <span
                                                    className="value">10,000 تومان</span> : هدف</span>
                                                <span className="stats-percentage">79%</span>
                                            </div>
                                            <div className="stats-bar" data-value="79">
                                                <div className="bar-line"></div>
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 col-md-3 col-sm-4 col-xl-12">
                                <div className="project-item">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${projectImg1})`}}></div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#">ویدیو و فیلم</a>
                                        </div>
                                        <div className="author">
                                            <img src={img1} alt="Thumb"/>
                                            <a href="#">جیمز بارو</a>
                                        </div>
                                        <h5 className="title">
                                            <a href="project-details.html">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                از
                                                صنعت </a>
                                        </h5>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <span className="value-title"> <span
                                                    className="value">10,000 تومان</span> : هدف</span>
                                                <span className="stats-percentage">79%</span>
                                            </div>
                                            <div className="stats-bar" data-value="79">
                                                <div className="bar-line"></div>
                                            </div>
                                        </div>
                                        <span className="date"><i className="far fa-calendar-alt"></i> 1401/09/18</span>
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