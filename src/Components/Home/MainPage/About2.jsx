import React from 'react';
import aboutShape from "../../../assets/img/about/about-shape.png"
import img1 from "../../../assets/img/about/about-one.jpg"
function About2() {

    return (
        <>
            <section className="about-section-one">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-start justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="about-img">
                                <img src={img1} alt="Image"/>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
                            <div className="about-text mt-md-70 mb-md-50">
                                <div className="common-heading mb-30">
							<span className="tagline">
								<i className="fas fa-plus"></i> ما که هستیم
								<span className="heading-shadow-text">درباره ما</span>
							</span>
                                    <h2 className="title">چرا باید ما را انتخاب کنید</h2>
                                </div>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                                </p>
                                <div className="author-note wow fadeInUp">
                                    <ul>
                                        <li><i className="far fa-check"></i> سازمان مردم نهاد</li>
                                        <li><i className="far fa-check"></i> رویداد های موفق</li>
                                    </ul>
                                    <div className="author-info">
                                        <h5 className="name">مایکل هرت</h5>
                                        <span className="title">بنیانگذار و مدیرعامل</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About2