import React from 'react';
import logo from "../../../assets/img/LOGO1-1.jpeg"
function MainPage() {

    return (
        <>
            <footer className="site-footer">
                <div className="footer-content-area">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="row justify-content-between">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="widget about-widget">
                                        <div className="footer-logo">
                                            <img src={logo} alt="salam"/>
                                        </div>
                                        <p>
                                            با خانمان همیشه در کنار شما...
                                        </p>
                                        <div className="newsletter-form">
                                            <h5 className="form-title">عضویت در خبرنامه</h5>
                                            <form action="#">
                                                <input type="text" placeholder="آدرس ایمیل"/>
                                                    <button type="submit"><i className="far fa-arrow-left"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="widget nav-widget">
                                        <h4 className="widget-title">پروژه های ما</h4>
                                        <ul>
                                            <li><a href="project-1.html">بهداشت و سلامت</a></li>
                                            <li><a href="project-2.html">تحصیلات</a></li>
                                            <li><a href="project-1.html">تکلونوژی</a></li>
                                            <li><a href="project-3.html">طراحی وب</a></li>
                                            <li><a href="project-2.html">غذا و البسه</a></li>
                                            <li><a href="project-1.html">ویدیو و فیلم</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="widget nav-widget">
                                        <h4 className="widget-title">حمایت</h4>
                                        <ul>
                                            <li><a href="about.html">خط مشی</a></li>
                                            <li><a href="contact.html">شرایط</a></li>
                                            <li><a href="company-overview.html">سازمان</a></li>
                                            <li><a href="faq.html">سوالات متداول</a></li>
                                            <li><a href="contact.html">تماس با ما</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-5 col-sm-8">
                                    <div className="widget contact-widget">
                                        <h4 className="widget-title">تماس با ما</h4>
                                        <ul className="info-list">
                                            <li>
                                                <span className="icon"><i className="far fa-phone"></i></span>
                                                <span className="info">
											<span className="info-title">شماره تماس</span>
											<a href="#">021-29905285</a>
										</span>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="far fa-envelope-open"></i></span>
                                                <span className="info">
											<span className="info-title">ایمیل</span>
											<a href="#"><span className="__cf_email__"
                                                              data-cfemail="0f7c7a7f7f607d7b4f68626e6663216c6062">info@charity-salam.ir</span></a>
										</span>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="far fa-map-marker-alt"></i></span>
                                                <span className="info">
											<span className="info-title">آدرس</span>
											<a href="#"> تهران - مرکز رشد و نوآوری دانشگاه شهید بهشتی</a>
										</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <div className="row flex-md-row-reverse">
                                <div className="col-md-6">
                                    <ul className="social-icons">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <p className="copyright-text">© 2022 <a href="#">با خانمان</a>. تمامی حقوق محفوظ است</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default MainPage