import React from 'react';
import img1 from "../../../assets/img/author-thumbs/01.jpg"
import Slider from "react-slick";

function Campaigns() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable:true,
        autoplay:true,
        arrows:false,
        autoplaySpeed:1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
            <section className="emergency-project-with-cta">
                <div className="emergency-project-slider">
                    <div className="container">
                        <div className="common-heading text-center mb-60">
					<span className="tagline">
						<i className="fas fa-plus"></i>مورد اعتماد بزرگترین شرکت های خصوصی و رویدادها در شهر
						<span className="heading-shadow-text">عضو شوید</span>
					</span>
                            <h2 className="title">کمپین های ما</h2>
                        </div>
                        <div className="row project-slider-two project-items project-style-four">
                            <Slider {...settings}>
                                <div className="col">
                                    <div className="project-item">
                                        <div className="thumb"
                                             style={{backgroundImage:`url(${img1})`}}></div>
                                        <div className="content">
                                            <div className="cats">
                                                <a href="#">کووید - 19</a>
                                            </div>

                                            <div className="author">
                                                <img src={img1} alt="Thumb"/>
                                                <a href="#">جیمز بارو</a>
                                            </div>

                                            <h5 className="title">
                                                <a href="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت </a>
                                            </h5>
                                            <div className="project-stats">
                                                <div className="stats-value">
                                                    <span className="value-title">هدف <span className="value">$59,689</span></span>
                                                    <span className="stats-percentage">83%</span>
                                                </div>
                                                <div className="stats-bar" data-value="90">
                                                    <div className="bar-line"></div>
                                                </div>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1401/10/06</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="project-item">
                                        <div className="thumb"
                                             style={{backgroundImage:`url(${img1})`}}></div>
                                        <div className="content">
                                            <div className="cats">
                                                <a href="#">کووید - 19</a>
                                            </div>

                                            <div className="author">
                                                <img src={img1} alt="Thumb"/>
                                                <a href="#">جیمز بارو</a>
                                            </div>

                                            <h5 className="title">
                                                <a href="project-details.html">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت </a>
                                            </h5>
                                            <div className="project-stats">
                                                <div className="stats-value">
                                                    <span className="value-title">هدف <span className="value">$59,689</span></span>
                                                    <span className="stats-percentage">83%</span>
                                                </div>
                                                <div className="stats-bar" data-value="90">
                                                    <div className="bar-line"></div>
                                                </div>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1401/02/09</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="project-item">
                                        <div className="thumb"
                                             style={{backgroundImage:`url(${img1})`}}></div>
                                        <div className="content">
                                            <div className="cats">
                                                <a href="#">کووید - 19</a>
                                            </div>

                                            <div className="author">
                                                <img src={img1} alt="Thumb"/>
                                                <a href="#">جیمز بارو</a>
                                            </div>

                                            <h5 className="title">
                                                <a href="project-details.html">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت </a>
                                            </h5>
                                            <div className="project-stats">
                                                <div className="stats-value">
                                                    <span className="value-title">هدف <span className="value">$59,689</span></span>
                                                    <span className="stats-percentage">83%</span>
                                                </div>
                                                <div className="stats-bar" data-value="90">
                                                    <div className="bar-line"></div>
                                                </div>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1400/05/07</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="project-item">
                                        <div className="thumb"
                                             style={{backgroundImage:`url(${img1})`}}></div>
                                        <div className="content">
                                            <div className="cats">
                                                <a href="#">کووید - 19</a>
                                            </div>

                                            <div className="author">
                                                <img src={img1} alt="Thumb"/>
                                                <a href="#">جیمز بارو</a>
                                            </div>

                                            <h5 className="title">
                                                <a href="project-details.html">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت </a>
                                            </h5>
                                            <div className="project-stats">
                                                <div className="stats-value">
                                                    <span className="value-title">هدف <span className="value">$59,689</span></span>
                                                    <span className="stats-percentage">83%</span>
                                                </div>
                                                <div className="stats-bar" data-value="90">
                                                    <div className="bar-line"></div>
                                                </div>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1400/10/19</span>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Campaigns