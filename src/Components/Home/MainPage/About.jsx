import React from 'react';
import aboutShape from "../../../assets/img/about/about-shape.png"
import manWithLaptop from "../../../assets/img/about/man-with-laptop.png"
function About() {

    return (
        <>
            <section className="about-section-two">
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
                                        <h2 className="title text-right">ما در با خانمان دست یاری شما هستیم…</h2>
                                    </div>
                                    <p>
                                        باخانمان یک شرکت غیرانتفاعی و مستقل است. این شرکت فعالیت خود را از سال 1398 آغاز کرده است. این شرکت اولین شرکت خیریه ای در حوزه تامین مالی جمعی و تامین تخصص جمعی در ایران است. خیرین و متخصصان متناسب با توان خود در طرح های معرفی شده از این شرکت فعالیت می کنند.
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
export default About