import React from 'react';
import heroThumb2 from '../../assets/images/hero-shape-2.png';
import heroThumb8 from '../../assets/images/hero-thumb-8.png';

function HeroHomeSeven() {
    return (
        <>
            <section className="appie-hero-area appie-hero-6-area appie-hero-7-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="appie-hero-content appie-hero-content-6 appie-hero-content-7">
                                <h1 className="appie-title">Creative way to Showcase your app </h1>
                                <p>
                                    Lost the plot so I said nancy boy I don't want no agro bleeder
                                    bum bag easy peasy cheesed off cheers ruddy.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-apple"></i>
                                            <span>
                                                Available on the <span>App Store</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-google-play"></i>
                                            <span>
                                                Available on the <span>Google Play</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="info"></div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="appie-hero-thumb-6">
                                <div
                                    className="thumb wow animated fadeInUp text-center"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={heroThumb8} alt="" />
                                    <div className="back-image">
                                        <img src={heroThumb2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeSeven;
