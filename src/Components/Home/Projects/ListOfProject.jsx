import React, {useState} from 'react';
import img1 from "../../../assets/img/project/project-list-01.jpg"
import img2 from "../../../assets/img/project/project-list-03.jpg"
import {BsCash, BsHeart, BsHeartFill} from "react-icons/bs";
import {GiCash} from "react-icons/gi";
import ProgressBar from "react-bootstrap/ProgressBar";

function ListOfProject() {

    const [isLiked, setIsLiked] = useState(false);

    function toggleLikeBtn() {
        if (isLiked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="blog-sidebar">
                            <div className="row">
                                <div className="col-md-12 col-sm-6 col-xs-12">
                                    <div className="widget search-widget">
                                        <h4 className="widget-title">جستوجو کنید</h4>
                                        <input type="text" placeholder="کلمه کلیدی"/>
                                        <button><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-6 col-xs-12">
                                    <div className="widget category-widget">
                                        <h4 className="widget-title">دسته بندی ها</h4>
                                        <ul>
                                            <li><a href="#">کسب و کار (5) <i className="far fa-angle-left"></i></a></li>
                                            <li><a href="#">ساخت و ساز (7) <i className="far fa-angle-left"></i></a>
                                            </li>
                                            <li><a href="#">خلاقیت (9) <i className="far fa-angle-left"></i></a></li>
                                            <li><a href="#">بین المللی (2) <i className="far fa-angle-left"></i></a>
                                            </li>
                                            <li><a href="#">مدیریت (5) <i className="far fa-angle-left"></i></a></li>
                                            <li><a href="#">تکلونوژی (2) <i className="far fa-angle-left"></i></a></li>
                                            <li><a href="#">بدون دسته بندی (3) <i className="far fa-angle-left"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12 col-xs-12">
                        <div className="row project-items project-style-three justify-content-center">
                            <div className="col-lg-6 col-sm-10">
                                <div className="project-item mb-30">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${img2})`,borderRadius:"1rem"}}></div>
                                    <div className="content">
                                        <div className="cats" >
                                            <a href="#" style={{backgroundColor:"#02a95c"}}>ویدیو و فیلم</a>
                                        </div>
                                        <div className="content-top">
                                            <span className="date"><i
                                                className="far fa-calendar-alt"></i> 1401/06/07</span>
                                        </div>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <div className="d-flex align-items-center">
                                                    <BsCash color="#dcdcdc"/>
                                                    <span className="value-title mx-2"> مبلغ مورد نياز</span>
                                                </div>
                                                <span className="value">150,000,000 تومان</span>
                                            </div>
                                            <div className="stats-value">
                                                <div className="d-flex align-items-center">
                                                    <GiCash color="#dcdcdc"/>
                                                    <span className="value-title mx-2"> مبلغ حمايت شده</span>
                                                </div>
                                                <span className="value">15,000,000 تومان</span>
                                            </div>

                                            <div className="bar mt-4" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`}/>
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-between">
                                            <a href="#" className={"main-btn px-5"}>حمايت ميكنم</a>
                                            <div className="d-flex align-items-center">
                                                <span className="mx-1" style={{color:"#fff"}}>142</span>
                                                <button onClick={toggleLikeBtn}>{isLiked ?
                                                    <BsHeartFill color="#dc3545" fontSize="1.2rem"/> :
                                                    <BsHeart fontSize="1.2rem" color={"#fff"}/>}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-4  d-flex justify-content-between">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-10">
                                <div className="project-item mb-30">
                                    <div className="thumb"
                                         style={{backgroundImage: `url(${img1})`,borderRadius:"1rem"}}></div>
                                    <div className="content">
                                        <div className="cats" >
                                            <a href="#" style={{backgroundColor:"#02a95c"}}>ویدیو و فیلم</a>
                                        </div>
                                        <div className="content-top">
                                            <span className="date"><i
                                                className="far fa-calendar-alt"></i> 1401/06/07</span>
                                        </div>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <div className="d-flex align-items-center">
                                                    <BsCash color="#dcdcdc"/>
                                                    <span className="value-title mx-2"> مبلغ مورد نياز</span>
                                                </div>
                                                <span className="value">150,000,000 تومان</span>
                                            </div>
                                            <div className="stats-value">
                                                <div className="d-flex align-items-center">
                                                    <GiCash color="#dcdcdc"/>
                                                    <span className="value-title mx-2"> مبلغ حمايت شده</span>
                                                </div>
                                                <span className="value">15,000,000 تومان</span>
                                            </div>

                                            <div className="bar mt-4" data-value="">
                                                <ProgressBar variant="success" now={60} label={`${60}%`}/>
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-between">
                                            <a href="#" className={"main-btn px-5"}>حمايت ميكنم</a>
                                            <div className="d-flex align-items-center">
                                                <span className="mx-1" style={{color:"#fff"}}>142</span>
                                                <button onClick={toggleLikeBtn}>{isLiked ?
                                                    <BsHeartFill color="#dc3545" fontSize="1.2rem"/> :
                                                    <BsHeart fontSize="1.2rem" color={"#fff"}/>}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-4  d-flex justify-content-between">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListOfProject