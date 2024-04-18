import React, { useEffect } from 'react';
import logo7 from '../../assets/images/logo-7.png';
import logo from '../../assets/images/logo.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';

function HomeOneHeader({
    lang,
    darkEnable = false,
    action,
    langEnabled = false,
    changeMode,
    changeModeLan,
    dark,
    className,
}) {
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
                                {darkEnable && dark ? (
                                    <a href="/">
                                        <img src={logo7} alt="" />
                                    </a>
                                ) : (
                                    <a href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="appie-header-main-menu">
                                <Navigation />
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                            <div className="appie-btn-box text-right">
                                {darkEnable &&
                                    (dark ? (
                                        <span
                                            className="dark__btn__sun"
                                            onClick={(e) => changeMode(e)}
                                        >
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                                ></path>
                                            </svg>
                                        </span>
                                    ) : (
                                        <span
                                            className="dark__btn__mon"
                                            onClick={(e) => changeMode(e)}
                                        >
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                ></path>
                                            </svg>
                                        </span>
                                    ))}
                                {langEnabled &&
                                    (lang ? (
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
                                    ))}
                                <a className="login-btn" href="#">
                                    <i className="fal fa-user" /> Login
                                </a>
                                <a className="main-btn ml-30" href="#">
                                    Get Started
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

export default HomeOneHeader;
