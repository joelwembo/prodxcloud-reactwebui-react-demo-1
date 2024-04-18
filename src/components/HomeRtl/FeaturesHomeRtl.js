import React, { useState } from 'react';
import thumb from '../../assets/images/features-thumb-1.png';
import shapeSix from '../../assets/images/shape/shape-6.png';
import shapeSeven from '../../assets/images/shape/shape-7.png';
import shapeEight from '../../assets/images/shape/shape-8.png';

function FeaturesHomeRtl({ className }) {
    const [tab, setTab] = useState('setting');
    const handleClick = (e, value) => {
        e.preventDefault();
        setTab(value);
    };
    return (
        <section className={`appie-features-area pt-100 ${className || ''}`} id="features">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="appie-features-tabs-btn">
                            <div
                                className="nav flex-column nav-pills text-right"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    onClick={(e) => handleClick(e, 'setting')}
                                    className={`nav-link ${tab === 'setting' ? 'active' : ''}`}
                                    id="v-pills-home-tab"
                                    data-toggle="pill"
                                    href="#v-pills-home"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="true"
                                >
                                    <i className="fas fa-cog" /> إعدادات
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'report')}
                                    className={`nav-link ${tab === 'report' ? 'active' : ''}`}
                                    id="v-pills-profile-tab"
                                    data-toggle="pill"
                                    href="#v-pills-profile"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-exclamation-triangle" /> تقرير
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'notice')}
                                    className={`nav-link ${tab === 'notice' ? 'active' : ''}`}
                                    id="v-pills-messages-tab"
                                    data-toggle="pill"
                                    href="#v-pills-messages"
                                    role="tab"
                                    aria-controls="v-pills-messages"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-bell" /> إشعارات Saeety
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'app')}
                                    className={`nav-link ${tab === 'app' ? 'active' : ''}`}
                                    id="v-pills-settings-tab"
                                    data-toggle="pill"
                                    href="#v-pills-settings"
                                    role="tab"
                                    aria-controls="v-pills-settings"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-lock" /> قفل التطبيق
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className={`${
                                    tab === 'setting' ? 'show active' : ''
                                } tab-pane fade`}
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content text-right wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>ردود الفعل المخصصة</span>
                                            <h3 className="title">
                                                دع <br /> المحادثة تتدفق
                                            </h3>
                                            <p>
                                                التمهيد السيارة مثانة تماما الفاخرة برك الهريسة
                                                اللاسلكية بعض دودج.
                                            </p>
                                            <a className="main-btn" href="#">
                                                يتعلم أكثر
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'report' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-profile"
                                role="tabpanel"
                                aria-labelledby="v-pills-profile-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content text-right animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>ردود الفعل المخصصة</span>
                                            <h3 className="title">
                                                دع <br /> المحادثة تتدفق
                                            </h3>
                                            <p>
                                                التمهيد السيارة مثانة تماما الفاخرة برك الهريسة
                                                اللاسلكية بعض دودج.
                                            </p>
                                            <a className="main-btn" href="#">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'notice' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content text-right animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>ردود الفعل المخصصة</span>
                                            <h3 className="title">
                                                دع <br /> المحادثة تتدفق
                                            </h3>
                                            <p>
                                                التمهيد السيارة مثانة تماما الفاخرة برك الهريسة
                                                اللاسلكية بعض دودج.
                                            </p>
                                            <a className="main-btn" href="#">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'app' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content text-right animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>ردود الفعل المخصصة</span>
                                            <h3 className="title">
                                                دع <br /> المحادثة تتدفق
                                            </h3>
                                            <p>
                                                التمهيد السيارة مثانة تماما الفاخرة برك الهريسة
                                                اللاسلكية بعض دودج.
                                            </p>
                                            <a className="main-btn" href="#">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape-1">
                <img src={shapeSix} alt="" />
            </div>
            <div className="features-shape-2">
                <img src={shapeSeven} alt="" />
            </div>
            <div className="features-shape-3">
                <img src={shapeEight} alt="" />
            </div>
        </section>
    );
}

export default FeaturesHomeRtl;
