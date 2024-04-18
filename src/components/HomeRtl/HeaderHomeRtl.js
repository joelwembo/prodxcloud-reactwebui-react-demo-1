import React, { useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';

function HeaderHomeRtl({ action, className, lang, changeModeLan }) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <header className={`appie-header-area appie-sticky ${className || ''}`}>
            <div className="container">
                <div className="header-nav-box">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                            <div className="appie-logo-box">
                                <a href="/">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="appie-header-main-menu">
                                <Navigation lang={lang} />
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                            <div className="appie-btn-box">
                                {lang ? (
                                    <span
                                        className="align-content-center ml-3"
                                        onClick={(e) => changeModeLan(e)}
                                    >
                                        RTL
                                    </span>
                                ) : (
                                    <span
                                        className="align-content-center mr-3"
                                        onClick={(e) => changeModeLan(e)}
                                    >
                                        LTR
                                    </span>
                                )}

                                <a className="login-btn" href="#">
                                    <i className="fal fa-user" /> تسجيل الدخول
                                </a>
                                <a className="main-btn mr-30" href="#">
                                    البدء
                                </a>
                                <div
                                    onClick={(e) => action(e)}
                                    className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                >
                                    <i className="fa fa-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderHomeRtl;
