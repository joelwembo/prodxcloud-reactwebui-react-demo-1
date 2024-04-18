import React from 'react';
import logo from '../../assets/images/logo.png';

function FooterHomeRtl({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget text-right">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p>Appie WordPress هو موضوع هو آخر موضوع ستحصل عليه على الإطلاق.</p>
                                <a href="#">
                                    اقرأ أكثر <i className="fal fa-arrow-right" />
                                </a>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation text-right">
                                <h4 className="title">شركة</h4>
                                <ul>
                                    <li>
                                        <a href="#">معلومات عنا</a>
                                    </li>
                                    <li>
                                        <a href="#">خدمة</a>
                                    </li>
                                    <li>
                                        <a href="#">دراسات الحالة</a>
                                    </li>
                                    <li>
                                        <a href="#">مدونة او مذكرة</a>
                                    </li>
                                    <li>
                                        <a href="#">اتصل</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation text-right">
                                <h4 className="title">الدعم</h4>
                                <ul>
                                    <li>
                                        <a href="#">تواصل اجتماعي</a>
                                    </li>
                                    <li>
                                        <a href="#">موارد</a>
                                    </li>
                                    <li>
                                        <a href="#">الأسئلة الشائعة</a>
                                    </li>
                                    <li>
                                        <a href="#">سياسة خاصة</a>
                                    </li>
                                    <li>
                                        <a href="#">وظائف</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info text-right">
                                <h4 className="title">ابقى على تواصل</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" /> support@appie.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" /> +(642) 342 762 44
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" /> 442 Belle Terre
                                            St Floor 7, San Francisco, AV 4206
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-apple" /> تنزيل لنظام iOS
                                            </a>
                                        </li>
                                        <li>
                                            <a className="item-2" href="#">
                                                <i className="fab fa-google-play" /> تنزيل لنظام
                                                Android
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-text">
                                    <p>حقوق النشر © 2021 Appie. كل الحقوق محفوظة.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeRtl;
