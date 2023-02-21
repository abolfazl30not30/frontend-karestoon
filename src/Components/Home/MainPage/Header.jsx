import React, {useEffect, useState} from 'react';
import logo from "../../../assets/img/LOGO1-1.png"
import logoWhite from "../../../assets/img/logo-white.png"
import {NavLink,Link} from "react-router-dom";
function Header() {
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
            <header className="site-header sticky-header transparent-header topbar-transparent mt-2">
                <div className={isMobile ? "navbar-wrapper breakpoint-on" : "navbar-wrapper"}>
                    <div className="container">
                        <div className="navbar-inner">
                            <div className="site-logo">
                                <Link to="/"><img src={logo} alt="Funden"/></Link>
                            </div>
                            <div className="nav-menu">
                                <ul>
                                    <li>
                                        <NavLink end to="/" activeClassName='active'>خـانـه</NavLink>
                                    </li>
                                    <li>
                                        <a href="#">معرفي با خانمان</a>
                                    </li>
                                    <li>
                                        <NavLink  to="/projects" activeClassName='active'>پـروژه ها</NavLink>
                                    </li>
                                    <li>
                                        <a href="">رويداد ها</a>
                                    </li>
                                    <li>
                                        <a href="">همياران</a>
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
                                    <li><NavLink  to="/contact-us" activeClassName='active'>ارتباط بـا مـا</NavLink></li>
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
                        <Link to="/"><img src={logoWhite} alt="Funden"/></Link>
                    </div>
                    <ul className="panel-menu">
                        <li>
                            <NavLink end to="/" activeClassName='active'>خـانـه</NavLink>
                        </li>
                        <li>
                            <a href="#">معرفي با خانمان</a>
                        </li>
                        <li>
                            <NavLink  to="/projects" activeClassName='active'>پـروژه ها</NavLink>
                        </li>
                        <li>
                            <a href="">رويداد ها</a>
                        </li>
                        <li>
                            <a href="">همياران</a>
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
                        <li><NavLink  to="/contact-us" activeClassName='active'>ارتباط بـا مـا</NavLink></li>
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

export default Header