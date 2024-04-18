import React from 'react';
import thumb from '../../assets/images/traffic-thumb.png';

function TrafficHomeRtl({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title text-right">
                            <span>مرور</span>
                            <h3 className="title">إعداد التقارير مع 50 ألف استفسار.</h3>
                            <p>
                                لقد قام بتجسيدها بوو هاري ذا كراش بارج تشاب هري سبيفينج تنفق فلسا
                                واحدا على مونتي بورك باتي الكامل.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service text-right mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">مصممة بعناية</h5>
                                    <p>Mucker الجص التافه كل ماتي موريش.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service text-right item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">اختر التطبيق</h5>
                                    <p>Mucker الجص التافه كل ماتي موريش.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service text-right item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">مزامنة سلسة</h5>
                                    <p>Mucker الجص التافه كل ماتي موريش.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service text-right item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">مستخدم تفاعلي</h5>
                                    <p>Mucker الجص التافه كل ماتي موريش.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="traffic-btn mt-50">
                                    <a className="main-btn" href="#">
                                        يتعلم أكثر <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeRtl;
