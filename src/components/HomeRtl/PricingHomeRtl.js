import React, { useState } from 'react';

function PricingHomeRtl({ className }) {
    const [toggleSwitch, setSwitchValue] = useState(true);
    return (
        <>
            <section className={`appie-pricing-area pt-90 pb-90 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">اختر خطتك</h3>
                                <p>تخطيطات وأنماط مختلفة لأقسام الفريق..</p>
                            </div>
                            <ul
                                className="list-inline text-center switch-toggler-list"
                                role="tablist"
                                id="switch-toggle-tab"
                            >
                                <li className={`month ${toggleSwitch ? 'active' : ''}`}>
                                    <a href="#">سنوي</a>
                                </li>
                                <li>
                                    <label
                                        onClick={() => setSwitchValue(!toggleSwitch)}
                                        className={`switch ${toggleSwitch ? 'on' : 'off'}`}
                                    >
                                        <span className="slider round" />
                                    </label>
                                </li>
                                <li className={`year ${toggleSwitch === false ? 'active' : ''}`}>
                                    <a href="#">شهريا</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tabed-content">
                        {toggleSwitch ? (
                            <div id="month">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single text-right">
                                            <div className="pricig-heading">
                                                <h6>طازج</h6>
                                                <div className="price-range">
                                                    <sup>$</sup> <span>04</span>
                                                    <p>/شهر</p>
                                                </div>
                                                <p>احصل على نسخة تجريبية مجانية لمدة 14 يومًا</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> سجل الدردشة
                                                        60 يومًا
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        15 جيجا تخزين سحابي
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        اختر الخطة
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single text-right">
                                            <div className="pricig-heading">
                                                <h6>حلو</h6>
                                                <div className="price-range">
                                                    <sup>$</sup> <span>16</span>
                                                    <p>/شهر</p>
                                                </div>
                                                <p>دفع 276 دولارًا لكل موقع سنويًا.</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> سجل الدردشة
                                                        60 يومًا
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 50 جيجا تخزين
                                                        سحابي
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 دعم
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        اختر الخطة
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-rebon">
                                                <span>الأكثر شهرة</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single text-right">
                                            <div className="pricig-heading">
                                                <h6>كثير العصارة</h6>
                                                <div className="price-range">
                                                    <sup>$</sup> <span>27</span>
                                                    <p>/شهر</p>
                                                </div>
                                                <p>دفع 276 دولارًا لكل موقع سنويًا.</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> سجل الدردشة
                                                        60 يومًا
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> أمن البيانات
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 جيجا بايت
                                                        تخزين سحابي
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 دعم
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        اختر الخطة
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div id="year">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single text-right">
                                            <div className="pricig-heading">
                                                <h6>طازج</h6>
                                                <div className="price-range">
                                                    <sup>$</sup> <span>32</span>
                                                    <p>/Yearly</p>
                                                </div>
                                                <p>احصل على نسخة تجريبية مجانية لمدة 14 يومًا</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> سجل الدردشة
                                                        60 يومًا
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        15 جيجا تخزين سحابي
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        اختر الخطة
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single text-right">
                                            <div className="pricig-heading">
                                                <h6>حلو</h6>
                                                <div className="price-range">
                                                    <sup>$</sup> <span>116</span>
                                                    <p>/Yearly</p>
                                                </div>
                                                <p>دفع 276 دولارًا لكل موقع سنويًا.</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> سجل الدردشة
                                                        60 يومًا
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 50 جيجا تخزين
                                                        سحابي
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 دعم
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        اختر الخطة
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-rebon">
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single text-right">
                                            <div className="pricig-heading">
                                                <h6>كثير العصارة</h6>
                                                <div className="price-range">
                                                    <sup>$</sup> <span>227</span>
                                                    <p>/Yearly</p>
                                                </div>
                                                <p>دفع 276 دولارًا لكل موقع سنويًا.</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> سجل الدردشة
                                                        60 يومًا
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> أمن البيانات
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 جيجا بايت
                                                        تخزين سحابي
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 دعم
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        اختر الخطة
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PricingHomeRtl;
