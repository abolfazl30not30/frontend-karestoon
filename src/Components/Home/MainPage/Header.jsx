import React from 'react';
import logo from "../../../assets/img/LOGO1-1.jpeg"
import logoWhite from "../../../assets/img/logo-white.png"
function Header() {
    return (
        <>
            <header className="site-header sticky-header transparent-header topbar-transparent">
                <div className="header-topbar d-none d-sm-block">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <ul className="contact-info">
                                    <li><a href="#"><i className="far fa-envelope"></i> <span className="__cf_email__" data-cfemail="info@charity-salam.ir">info@charity-salam.ir</span></a></li>
                                    <li><a href="#"><i className="far fa-map-marker-alt"></i> تهران - مرکز رشد و نوآوری دانشگاه شهید بهشتی</a></li>
                                </ul>
                            </div>
                            <div className="col-auto d-none d-md-block">
                                <ul className="social-icons">
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-wrapper">
                    <div className="container">
                        <div className="navbar-inner">
                            <div className="site-logo">
                                <a href=""><img src={logo} alt="Funden"/></a>
                            </div>
                            <div className="nav-menu">
                                <ul>
                                    <li className="current">
                                        <a href="#">خانه</a>
                                    </li>
                                    <li>
                                        <a href="#">معرفي با خانمان</a>
                                    </li>
                                    <li>
                                        <a href="">رويداد ها</a>
                                    </li>
                                    <li>
                                        <a href="">همياران</a>
                                    </li>
                                    <li>
                                        <a href="#">طرح ها
                                            <span className="dd-trigger">
                                                <i className="far fa-angle-down"></i>
                                            </span>
                                        </a>
                                        <ul className="submenu">
                                            <li><a href="#">تامين مالي جمعی</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="news-standard.html">وبلاگ</a>
                                        <ul className="submenu">
                                            <li><a href="news-standard.html">استاندارد</a></li>
                                            <li><a href="news-details.html">جزئیات خبر</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">صفحه ها
                                            <span className="dd-trigger">
                                                <i className="far fa-angle-down"></i>
                                            </span>
                                        </a>
                                        <ul className="submenu">
                                            <li><a href="#">اهداف</a></li>
                                            <li><a href="#">سوالات متداول</a></li>
                                            <li><a href="#">ماموریت</a></li>
                                            <li><a href="#">گالری تصاویر</a></li>
                                            <li><a href="#">تیم ما</a></li>
                                            <li><a href="#">نظرات</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">ارتباط با ما</a></li>
                                </ul>
                            </div>
                            <div className="navbar-extra d-flex align-items-center">
                                <a href="#" className="main-btn nav-btn d-none d-sm-inline-block">
                                    هم اکنون کمک کنید <i className="far fa-arrow-left"></i>
                                </a>
                                <a href="#" className="nav-toggler">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-panel">
                    <div className="panel-logo">
                        <a href="#"><img src={logoWhite} alt="Funden"/></a>
                    </div>
                    <ul className="panel-menu">
                        <li className="current">
                            <a href="#">خانه</a>
                            <ul className="submenu">
                                <li><a href="#">خانه یک</a></li>
                                <li><a href="#">خانه دو</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">پروژه ها</a>
                            <ul className="submenu">
                                <li><a href="#">پروژه یک</a></li>
                                <li><a href="#">پروژه دو</a></li>
                                <li><a href="#">پروژه سه</a></li>
                                <li><a href="#">جزئیات پروژه</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">رویداد ها</a>
                        </li>
                        <li>
                            <a href="#">وبلاگ</a>
                            <ul className="submenu">
                                <li><a href="#">استاندارد</a></li>
                                <li><a href="#">جزئیات خبر</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">صفحه ها</a>
                            <ul className="submenu">
                                <li><a href="#">درباره ما</a></li>
                                <li><a href="#">درباره سازمان</a></li>
                                <li><a href="#">اعضای تیم</a></li>
                                <li><a href="#">جدول قیمت</a></li>
                                <li><a href="#">سوالات متداول</a></li>
                                <li><a href="#">نظرات</a></li>
                            </ul>
                        </li>
                        <li><a href="#">ارتباط با ما</a></li>
                    </ul>
                    <div className="panel-extra">
                        <a href="#" className="main-btn btn-white">
                            هم اکنون کمک کنید <i className="far fa-arrow-left"></i>
                        </a>
                    </div>
                    <a href="#" className="panel-close">
                        <i className="fal fa-times"></i>
                    </a>
                </div>
            </header>
        </>
    );
}

export default Header