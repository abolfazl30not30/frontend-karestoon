import React from 'react';

function Counter() {

    return (
        <>
            <section className="counter-section-one mt-negative">
                <div className="container primary-bg">
                    <div className="row counter-boxes justify-content-xl-between justify-content-center">
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-40 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding"></i>
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap">
                                        <span className="count">3598</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <h6 className="title">پروژه های تکمیل شده</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-40 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding"></i>
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap">
                                        <span className="count">9634</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <h6 className="title">حامیان</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-40 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding"></i>
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap">
                                        <span className="count">8565</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <h6 className="title">جایزه</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-40 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding"></i>
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap">
                                        <span className="count">4756</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <h6 className="title">کمک کننده فعال</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Counter