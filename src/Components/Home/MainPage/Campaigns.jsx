import React, {useEffect} from 'react';
import Slider from "react-slick";
import {BsCash, BsHeart, BsHeartFill} from "react-icons/bs";
import {GiCash} from "react-icons/gi";
import ProgressBar from "react-bootstrap/ProgressBar";
import {useState} from "react";
import img1 from "../../../assets/img/divarmehrabani.jpg"
import img2 from "../../../assets/img/project/project-list-03.jpg";
import {Link} from "react-router-dom";
import api from "../../../api/api";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {numberSlicer} from "../../../helper/numberSlicer";

function Campaigns() {
    const [isLiked, setIsLiked] = useState(false);
    const [projects, setProjects] = useState([]);
    const [profileList, setProfileList] = useState([]);
    const getProjects = async () => {
        const projectsResponse = await api.get("project/search?priority=high")
        setProjects(projectsResponse.data)
        let profileUrls = []
        for (let i = 0; i < projectsResponse.data.length; i++) {
            const getProfileResponse = await api.get(`file/${projectsResponse.data[i].profileId}`, {responseType: 'blob'}).then(response => response.data)
                .then((data) => {
                    profileUrls.push(URL.createObjectURL(data));
                })
        }
        setProfileList([...profileUrls])
    }
    useEffect(() => {
        getProjects()
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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

    function toggleLikeBtn() {
        if (isLiked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }

    return (
        <>
            <section className="emergency-project-with-cta">
                <div className="emergency-project-slider">
                    <div className="container">
                        <div className="common-heading text-center mb-60">
					<span className="tagline">
						<i className="fas fa-plus"></i>کمک کنید
						<span className="heading-shadow-text">پروژه های خیریه</span>
					</span>
                            <h2 className="title">نیاز فوری</h2>
                        </div>
                        <div className="row project-items project-style-three justify-content-center">
                            <Slider {...settings}>
                                {
                                    projects.map((project, index) =>
                                        <div className="col-lg-6 col-sm-10 px-4">
                                            <div className="project-item">
                                                <div className={"thumb"}>
                                                    <LazyLoadImage className={"thumb"} style={{borderRadius: "1rem"}}
                                                                   src={profileList[index]}
                                                                   alt=""
                                                    />
                                                </div>
                                                {/*<div className="thumb"*/}
                                                {/*     style={{backgroundImage: `url(${img2})`,borderRadius:"1rem"}}></div>*/}
                                                {/*<div className="content">*/}
                                                <div className="cats">
                                                    <a href="" style={{backgroundColor: "#02a95c"}}>{project.title}</a>
                                                </div>
                                                <div className="content-top d-flex justify-content-end">
                                                    <span className="date"><i
                                                        className="far fa-calendar-alt"></i>{project.startDate}</span>
                                                </div>
                                                <div className="project-stats">
                                                    <div className="stats-value">
                                                        <span className="value">{numberSlicer(project.expectedBudge.toString())} تومان</span>
                                                        <div className="d-flex align-items-center">
                                                            <span className="value-title mx-2"> مبلغ مورد نياز</span>
                                                            <BsCash color="#dcdcdc"/>
                                                        </div>
                                                    </div>
                                                    <div className="stats-value">
                                                        <span className="value">{numberSlicer(project.prepareBudge.toString())} تومان</span>
                                                        <div className="d-flex align-items-center">
                                                            <span className="value-title mx-2"> مبلغ حمايت شده</span>
                                                            <GiCash color="#dcdcdc"/>
                                                        </div>
                                                    </div>

                                                    <div className="bar mt-4" style={{direction: 'rtl'}} data-value="">
                                                        <div className="d-flex justify-content-end">
                                                            <span style={{
                                                                fontSize: "0.7rem",
                                                                color: "#fff"
                                                            }}>{project.progress}%</span>
                                                        </div>
                                                        <ProgressBar style={{height: "0.3rem"}} variant="success"
                                                                     now={project.progress}/>
                                                    </div>
                                                </div>
                                                <div className="mt-5 d-flex justify-content-between">
                                                    <Link to="/project-details" className={"main-btn px-5"}>حمايت
                                                        ميكنم</Link>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mx-1"
                                                              style={{color: "#fff"}}>{project.likeCount}</span>
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
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Campaigns