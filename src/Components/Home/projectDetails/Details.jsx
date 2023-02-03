import React from 'react';
import img1 from "../../../assets/img/project/project-details.jpg"

function Details() {

    return (
        <>
            <section className="project-details-area section-gap-extra-bottom">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="project-details-tab">
                                <div className="tab-content" id="projectTabContent">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel">
                                        <div className="row justify-content-center">
                                            <h4 className="description-title">چرا باید از محصول ما حمایت
                                                کنید</h4>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                                با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                                                و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                                                کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                                آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                                                افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                                                طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                                                صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                                راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                                                شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                                                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم
                                                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                                                از طراحان
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
                                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                                                کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                                آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                                                افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                                                طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                                                صورت می توان امید داشت که تمام
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="update" role="tabpanel">
                                آپدیت
                            </div>
                            <div className="tab-pane fade" id="bascker-list" role="tabpanel">
                                لیست حامیان
                            </div>
                            <div className="tab-pane fade" id="reviews" role="tabpanel">
                                بررسی ها
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="project-thumb mb-md-50">
                                <img src={img1} alt="Image"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-summery">
                                <a href="#" className="category">هدفون</a>
                                <h3 className="project-title">
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                </h3>

                                <div className="meta">
                                    <a href="#" className="date"><i className="far fa-calendar-alt"></i>1401/06/09</a>
                                </div>
                                <div className="project-funding-info">
                                    <div className="info-box">
                                        <span>10,000</span>
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
                                        <div className="raised-label">مبلغ جمع آوری شده : 5,000 تومان</div>
                                        <div className="percent-raised">79%</div>
                                    </div>
                                    <div className="stats-bar" data-value="79">
                                        <div className="bar-line"></div>
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
                                        <button type="submit" className="main-btn">هم اکنون کمک کنید <i
                                            className="far fa-arrow-left"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Details