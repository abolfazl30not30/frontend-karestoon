import React, {useState} from 'react';
import img1 from "../../../assets/img/project/project-list-01.jpg"
import img2 from "../../../assets/img/project/project-list-03.jpg"
import {BsCash, BsHeart, BsHeartFill} from "react-icons/bs";
import {GiCash} from "react-icons/gi";
import ProgressBar from "react-bootstrap/ProgressBar";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {AiOutlineSearch} from "react-icons/ai";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

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
        label: 'قديمي ترين',
    },
];

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
                <div className="row mb-5 mx-2">
                    <div className="col-2">
                        <TextField
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            select
                            label="مرتب سازي براساس"
                            defaultValue="new"
                            inputProps={{style: {fontFamily: "dana"}}} // font size of input text
                            InputLabelProps={{style: {fontFamily: "dana"}}} // font size of input label
                            className="w-100 "
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="col-6">
                        <Paper
                            component="form"
                            sx={{ p: '5px 5px', display: 'flex', alignItems: 'center',fontFamily:"dana" }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1,fontFamily:"dana" }}
                                placeholder="جـستوجـو..."
                                inputProps={{ 'aria-label': 'جـستوجـو...' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <AiOutlineSearch />
                            </IconButton>
                        </Paper>
                    </div>
                </div>
                <div className="row project-items project-style-three justify-content-center">
                    <div className="col-lg-4 col-sm-10">
                        <div className="project-item mb-30">
                            <div className="thumb"
                                 style={{backgroundImage: `url(${img2})`, borderRadius: "1rem"}}></div>
                            <div className="content">
                                <div className="cats">
                                    <a href="#" style={{backgroundColor: "#02a95c"}}>ویدیو و فیلم</a>
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
                                        <span className="mx-1" style={{color: "#fff"}}>142</span>
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
                    <div className="col-lg-4 col-sm-10">
                        <div className="project-item mb-30">
                            <div className="thumb"
                                 style={{backgroundImage: `url(${img1})`, borderRadius: "1rem"}}></div>
                            <div className="content">
                                <div className="cats">
                                    <a href="#" style={{backgroundColor: "#02a95c"}}>ویدیو و فیلم</a>
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
                                        <span className="mx-1" style={{color: "#fff"}}>142</span>
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
                    <div className="col-lg-4 col-sm-10">
                        <div className="project-item mb-30">
                            <div className="thumb"
                                 style={{backgroundImage: `url(${img1})`, borderRadius: "1rem"}}></div>
                            <div className="content">
                                <div className="cats">
                                    <a href="#" style={{backgroundColor: "#02a95c"}}>ویدیو و فیلم</a>
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
                                        <span className="mx-1" style={{color: "#fff"}}>142</span>
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
        </>
    );
}

export default ListOfProject