import React from 'react';
import sbu from '../../../assets/img/sbu logo.jpg'
import salam from '../../../assets/img/salam logo.png'
function Partners() {

    return (
        <>
            <section className="partners-section section-gap section-border-bottom">
                <div className="container">
                    <div className="common-heading mb-30">
				<span className="tagline">
					<i className="fas fa-plus"></i> حامیان ما
					<span className="heading-shadow-text">حامیان</span>
				</span>
                        <h2 className="title">مورد اعتماد برند های معروف</h2>
                    </div>
                    <div className="row partners-logos-one">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30 ">
                                <a href="#" style={{textAlign:"center"}}><img src={sbu} style={{width:"50%"}} alt="Image"/></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30">
                                <a href="#"><img src={salam}  alt="Image"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Partners