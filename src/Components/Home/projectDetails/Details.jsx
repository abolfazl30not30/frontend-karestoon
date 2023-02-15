import React from 'react';
import img1 from "../../../assets/img/divarmehrabani.jpg"
import ProgressBar from "react-bootstrap/ProgressBar";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function Details() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <section className="project-details-area section-gap-extra-bottom">
                <div className="container">
                    <div className="row align-items-start justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="project-thumb mb-md-50">
                                <img src={img1} alt="Image"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-summery">
                                {/*<a href="#" className="category">هدفون</a>*/}
                                <h3 className="project-title">
                                    ديوار مهربانی
                                </h3>
                                <div className="meta">
                                    <a href="#" className="date"><i className="far fa-calendar-alt"></i>1401/06/09</a>
                                </div>
                                <div className="project-funding-info">
                                    <div className="info-box">
                                        <span>10,000,000,000تومان</span>
                                        <span className="info-title">هدف</span>
                                    </div>
                                    <div className="info-box">
                                        <span>9</span>
                                        <span className="info-title">حامی</span>
                                    </div>
                                    <div className="info-box">
                                        <span>29</span>
                                        <span className="info-title">روز باقی مانده</span>
                                    </div>
                                </div>
                                <div className="project-raised clearfix">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="raised-label">
                                            <span style={{color: "#696969"}}>مبلغ جمع آوری شده:</span>
                                            <span className="mx-3">5,000 تومان</span>
                                        </div>
                                        <div className="percent-raised">79%</div>
                                    </div>
                                    <div className="bar mt-4" data-value="">
                                        <ProgressBar variant="success" now={79} label={`${79}%`}/>
                                    </div>
                                </div>
                                <div className="project-form">
                                    <form action="#">
                                        <ul className="donation-amount">
                                            <li>5,000</li>
                                            <li>50,000</li>
                                            <li>180,000</li>
                                            <li>500,000</li>
                                            <li>1,000,000</li>
                                        </ul>
                                        <button className="main-btn">هم اکنون کمک کنید <i
                                            className="far fa-arrow-left"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">

                            <TabContext value={value}>
                                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                        <Tab label="توضیحات" value="1"/>
                                        <Tab label="نظرات" value="2"/>
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <div className="project-details-tab">
                                        <div className="row justify-content-center">
                                            <h4 className="description-title">چرا باید از محصول ما حمایت
                                                کنید</h4>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                                با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                                                و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                                                کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                            </p>
                                            <ul className="description-list">
                                                <li>لورم ایپسوم متن ساختگی با</li>
                                                <li>لورم ایپسوم متن ساختگی با</li>
                                                <li>لورم ایپسوم متن ساختگی با</li>
                                                <li>لورم ایپسوم متن ساختگی با</li>
                                            </ul>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                                با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                                                و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                                            </p>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="2">

                                </TabPanel>
                            </TabContext>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Details