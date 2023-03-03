import React, {useEffect, useState} from 'react';
import img1 from "../../../assets/img/project/project-list-01.jpg"
import img2 from "../../../assets/img/project/project-list-03.jpg"
import {BsCash, BsHeart, BsHeartFill} from "react-icons/bs";
import {GiCash} from "react-icons/gi";
import ProgressBar from "react-bootstrap/ProgressBar";
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import {AiOutlineSearch} from 'react-icons/ai'
import api from "../../../api/api";
import {LazyLoadImage} from "react-lazy-load-image-component";



const currencies = [
    {
        value: 'new',
        label: 'جديد ترين',
    },
    {
        value: 'popular',
        label: 'مشهور ترين',
    },
    {
        value: 'old',
        label: 'قديمی ترين',
    },
];

function ListOfProject() {

    const [isLiked, setIsLiked] = useState(false);
    const [projects, setProjects] = useState([]);
    const [profileList, setProfileList] = useState([]);
    const getProjects = async () => {
        const projectsResponse = await api.get("project")
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

    function toggleLikeBtn() {
        if (isLiked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (
        <>
            <div className="container mt-5">
                {/*<div className="row mb-5" style={{border:"2px solid #e5e7eb",borderRadius:"1rem",padding:"1.5rem"}}>*/}
                {/*    <CacheProvider value={cacheRtl}>*/}
                {/*        <div className="col-2">*/}
                {/*            <TextField*/}
                {/*                labelId="demo-simple-select-label"*/}
                {/*                id="demo-simple-select"*/}
                {/*                select*/}
                {/*                label="مرتب سازي براساس"*/}
                {/*                defaultValue="new"*/}
                {/*                InputProps={{style: {fontFamily: "dana"}}}*/}
                {/*                InputLabelProps={{*/}
                {/*                    style: {*/}
                {/*                        fontFamily: "dana",*/}
                {/*                        fontSize: "0.9rem"*/}
                {/*                    }*/}
                {/*                }} // font size of input label*/}
                {/*                className="w-100 "*/}
                {/*            >*/}
                {/*                {currencies.map((option) => (*/}
                {/*                    <MenuItem key={option.value} value={option.value}>*/}
                {/*                        {option.label}*/}
                {/*                    </MenuItem>*/}
                {/*                ))}*/}
                {/*            </TextField>*/}

                {/*        </div>*/}
                {/*        <div className="col-6">*/}
                {/*            <TextField id="outlined-basic" className="w-100 " label="جـستوجـو..." variant="outlined"*/}
                {/*                       InputLabelProps={{style: {fontFamily: "dana", fontSize: "0.9rem"}}}*/}
                {/*                       InputProps={{style:{fontFamily:"dana"},endAdornment: (*/}
                {/*                               <InputAdornment position="start">*/}
                {/*                                   <AiOutlineSearch fontSize="1.3rem"/>*/}
                {/*                               </InputAdornment>*/}
                {/*                           )}}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </CacheProvider>*/}
                {/*</div>*/}
                <div className="row project-items project-style-three justify-content-center">
                    {
                        projects.map((project, index) =>
                            <div className="col-lg-4 col-sm-10">
                                <div className="project-item mb-30">
                                    <div className={"thumb"}>
                                        <LazyLoadImage className={"thumb"} style={{borderRadius: "1rem"}}
                                                       src={profileList[index]}
                                                       alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#" style={{backgroundColor: "#02a95c"}}>{project.title}</a>
                                        </div>
                                        <div className="content-top">
                                                <span className="date"><i
                                                    className="far fa-calendar-alt"></i>{project.startDate}</span>
                                        </div>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <div className="d-flex align-items-center">
                                                    <BsCash color="#dcdcdc"/>
                                                    <span className="value-title mx-2"> مبلغ مورد نياز</span>
                                                </div>
                                                <span className="value">{project.expectedBudge}</span>
                                            </div>
                                            <div className="stats-value">
                                                <div className="d-flex align-items-center">
                                                    <GiCash color="#dcdcdc"/>
                                                    <span className="value-title mx-2"> مبلغ حمايت شده</span>
                                                </div>
                                                <span className="value">{project.prepareBudge} تومان</span>
                                            </div>

                                            <div className="bar mt-4" data-value="">
                                                <div className="d-flex justify-content-end">
                                                    <span style={{fontSize: "0.7rem",color:"#fff"}}>{project.progress}%</span>
                                                </div>
                                                <ProgressBar style={{height: "0.3rem"}} variant="success" now={project.progress}/>
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-between">
                                            <a href="#" className={"main-btn px-5"}>حمايت ميكنم</a>
                                            <div className="d-flex align-items-center">
                                                <span className="mx-1" style={{color: "#fff"}}>{project.likeCount}</span>
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
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default ListOfProject