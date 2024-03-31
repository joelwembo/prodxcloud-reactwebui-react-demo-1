import React from 'react';
import { Link } from 'react-router-dom';

import {  Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import data from '../assets/fake-data/data-collection'


function Login(props) {
    return (
        <div>

            <section className="bg-sign-in">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content-left vertical-carousel">
                                <div className="content-slide">
                                    
                                        <Swiper
                                        className="collection-1"
                                        direction={"vertical"}
                                        spaceBetween={30}
                                        slidesPerView={3}
                                        
                                        loop={true}
                                        modules={[Autoplay ]}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        
                                    >

                                        {
                                            data.slice(0,7).map(idx => (
                                                <SwiperSlide key={idx.id}>
                                                    <div className="slider-item">
                                                        <div className="tf-product ">
                                                            <div className="image">
                                                                <img src={idx.img} alt="Binabox" />
                                                            </div>
                                                            <h6 className="name"><Link to="/item-details">{idx.title}</Link></h6>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    
                                         </Swiper>
                                         <Swiper
                                        className="collection-1"
                                        direction={"vertical"}
                                        spaceBetween={30}
                                        slidesPerView={3}
                                        // breakpoints={{
                                        //     0: {
                                        //         slidesPerView: 1,
                                        //         },
                                        //     500: {
                                        //         slidesPerView: 2,
                                        //         },
                                        //     768: {
                                        //         slidesPerView: 3,
                                        //     },
                                        //     991: {
                                        //         slidesPerView: 4,
                                        //     },
                                        // }}
                                        
                                        loop={true}
                                        modules={[Autoplay ]}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        
                                    >

                                        {
                                            data.slice(3,9).map(idx => (
                                                <SwiperSlide key={idx.id}>
                                                    <div className="slider-item">
                                                        <div className="tf-product ">
                                                            <div className="image">
                                                                <img src={idx.img} alt="Binabox" />
                                                            </div>
                                                            <h6 className="name"><Link to="/item-details">{idx.title}</Link></h6>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    
                                         </Swiper>
                                         <Swiper
                                        className="collection-1"
                                        direction={"vertical"}
                                        spaceBetween={30}
                                        slidesPerView={3}
                                        
                                        loop={true}
                                        modules={[Autoplay ]}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        
                                    >

                                        {
                                            data.slice(7,13).map(idx => (
                                                <SwiperSlide key={idx.id}>
                                                    <div className="slider-item">
                                                        <div className="tf-product ">
                                                            <div className="image">
                                                                <img src={idx.img} alt="Binabox" />
                                                            </div>
                                                            <h6 className="name"><Link to="/item-details">{idx.title}</Link></h6>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    
                                         </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sign-in-form">
                                <h2>SIGN IN</h2>
                                <p>Welcome back! Please enter your details</p>
                                <form action="#" id="contactform">
                                    <fieldset><input id="name" name="name" tabIndex="1" aria-required="true" required="" type="text" placeholder="Username or Email" /></fieldset>
                                    <fieldset> <input id="showpassword" name="password" tabIndex="2" aria-required="true"  type="password" placeholder="Password" required="" /></fieldset>
                                    <div className="forgot-pass-wrap">
                                        <label>
                                        <input type="checkbox" />
                                        <span className="btn-checkbox"></span>
                                        Remember me
                                        </label>
                                        <Link to="#">Forgot your password?</Link>
                                    </div>
                                    <button className="tf-button submit" type="submit">SIGN IN</button>
                                </form>
                                <div className="choose-sign">
                                    Do you have account? <Link to="#">Sign up for free</Link> 
                                </div>

                                <div className="or"><span>or</span></div>

                                <div className="box-sign-social">
                                    <Link className="tf-button" to="#"><i className="fab fa-google"></i>Google</Link>
                                    <Link className="tf-button" to="#"><i className="fab fa-facebook-f"></i>Facebook</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            
        </div>
    );
}

export default Login;