import React from 'react';
import aboutShape from "../../../assets/img/about/about-shape.png"
import manWithLaptop from "../../../assets/img/about/man-with-laptop.png"
function MainPage() {

    return (
        <>
            <section className="about-section-two">
                <div className="about-form-area">
                    <div className="container">
                        <div className="about-donation-form">
                            <div className="donation-heading">
                                <h3 className="title">دست به دست هم</h3>
                                <span className="shadow-text">حمایت</span>
                            </div>
                            <form action="#">
                                <div className="form-wrap">
                                    <ul className="donation-amount">
                                        <li>5,000</li>
                                        <li>50,000</li>
                                        <li>180,000</li>
                                        <li>500,000</li>
                                        <li>1,000,000</li>
                                    </ul>
                                    <button type="submit" className="main-btn btn-white">هم اکنون کمک کنید <i
                                        className="far fa-arrow-left"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="about-video wow fadeInDown" data-wow-delay="0.2s">
                            <a href="http://www.youtube.com/watch?v=XSGBVzeBUbk" className="video-btn" data-lity><i
                                className="fas fa-play"></i></a>
                        </div>
                    </div>
                </div>
                <div className="about-text-area">
                    <div className="container">
                        <div className="row align-items-end justify-content-xl-start">
                            <div className="col-xl-5 col-lg-7 col-md-8 order-xl-2">
                                <div className="about-text">
                                    <div className="common-heading mb-30">
								<span className="tagline">
									<span className="float-right"><i className="fas fa-plus"></i> درباره ما</span>
									<span className="heading-shadow-text">درباره ما</span>
								</span>
                                        <h2 className="title text-right">ما به نحوه بهبود بازاریابی محصول شما کمک می
                                            کنیم</h2>
                                    </div>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                        طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                        لازم است، و برای شرایط
                                    </p>
                                    <ul className="check-list mt-30 text-right">
                                        <li>
                                            <h5 className="title">بالاترین میزان موفقیت</h5>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی </p>
                                        </li>
                                        <li>
                                            <h5 className="title">با تامین مالی جمعی سرمایه جمع آوری کنید</h5>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی </p>
                                        </li>
                                        <li>
                                            <h5 className="title">میلیون ها بودجه</h5>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی </p>
                                        </li>
                                    </ul>
                                    <a href="#" className="main-btn btn-dark  mt-40">بیشتر بدانید <i
                                        className="far fa-arrow-left"></i></a>
                                </div>
                            </div>
                            <div className="col-xl-5 order-xl-1 wow fadeInUp ">
                                <div className="about-curved-img">
                                    <img src={manWithLaptop} alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape">
                    <img src={aboutShape} alt="Shape"/>
                </div>
            </section>
        </>
    );
}

export default MainPage