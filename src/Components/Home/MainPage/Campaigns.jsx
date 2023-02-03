import React from 'react';
import img1 from "../../../assets/img/coin-wooden-table_1150-17730.webp"
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
                                                <a href="#">آبان 25</a>
                                            </div>

                                            <h5 className="title">
                                                <a href="">سلام بر آرزو ها</a>
                                            </h5>
                                            <div className="countdown">
                                                <div className="timer-count">
                                                    <div className="timer-value">142</div>
                                                    <div className="timer-text">روز</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">2</div>
                                                    <div className="timer-text">ساعت</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">16</div>
                                                    <div className="timer-text">دقيقه</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">17</div>
                                                    <div className="timer-text">ثانيه</div>
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
                                                <a href="#">آبان 25</a>
                                            </div>

                                            <h5 className="title">
                                                <a href="">سلام بر آرزو ها</a>
                                            </h5>
                                            <div className="countdown">
                                                <div className="timer-count">
                                                    <div className="timer-value">142</div>
                                                    <div className="timer-text">روز</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">2</div>
                                                    <div className="timer-text">ساعت</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">16</div>
                                                    <div className="timer-text">دقيقه</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">17</div>
                                                    <div className="timer-text">ثانيه</div>
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
                                                <a href="#">آبان 25</a>
                                            </div>

                                            <h5 className="title">
                                                <a href="">سلام بر آرزو ها</a>
                                            </h5>
                                            <div className="countdown">
                                                <div className="timer-count">
                                                    <div className="timer-value">142</div>
                                                    <div className="timer-text">روز</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">2</div>
                                                    <div className="timer-text">ساعت</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">16</div>
                                                    <div className="timer-text">دقيقه</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">17</div>
                                                    <div className="timer-text">ثانيه</div>
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
                                                <a href="#">آبان 25</a>
                                            </div>

                                            <h5 className="title">
                                                <a href="">سلام بر آرزو ها</a>
                                            </h5>
                                            <div className="countdown">
                                                <div className="timer-count">
                                                    <div className="timer-value">142</div>
                                                    <div className="timer-text">روز</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">2</div>
                                                    <div className="timer-text">ساعت</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">16</div>
                                                    <div className="timer-text">دقيقه</div>
                                                </div>
                                                <div className="timer-count">
                                                    <div className="timer-value">17</div>
                                                    <div className="timer-text">ثانيه</div>
                                                </div>
                                            </div>
                                            <span className="date"><i className="far fa-calendar-alt"></i> 1401/10/06</span>
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