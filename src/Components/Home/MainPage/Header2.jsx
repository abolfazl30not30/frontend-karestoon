import React from 'react';
import logo from "../../../assets/img/LOGO1-1.jpeg";
import logoWhite from "../../../assets/img/logo-white.png";
import {useEffect, useState} from "react";

function Header2() {
    const [isMobile,setIsMobile] = useState(false);
    const[isOpen,setIsOpne] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 768){
            setIsMobile(true)
        }else {
            setIsMobile(false)
        }
    }, []);

    function toggleNavbar (){
        if(isOpen){
            setIsOpne(false)
        }else {
            setIsOpne(true)
        }
    }

    return (
        <>
            <header className="site-header sticky-header">
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
                <div className={isMobile ? "navbar-wrapper breakpoint-on" : "navbar-wrapper"}>
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
                                    ورود | ثبت نام <i className="far fa-arrow-left"></i>
                                </a>
                                <a href="#" onClick={()=>{toggleNavbar()}} className={isOpen ? "nav-toggler panel-opened" : "nav-toggler"}>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isOpen ? "mobile-menu-panel panel-opened" : "mobile-menu-panel"}>
                    <div className="panel-logo">
                        <a href="#"><img src={logoWhite} alt="Funden"/></a>
                    </div>
                    <ul className="panel-menu">
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
                    <div className="panel-extra">
                        <a href="#" className="main-btn btn-white">
                            ورود | ثبت نام <i className="far fa-arrow-left"></i>
                        </a>
                    </div>
                    <a href="#" onClick={()=>{toggleNavbar()}} className="panel-close">
                        <i className="fal fa-times"></i>
                    </a>
                </div>
            </header>
        </>
    );
}

export default Header2