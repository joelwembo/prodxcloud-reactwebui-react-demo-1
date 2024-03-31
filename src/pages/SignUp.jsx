import React from 'react';

import { Link } from 'react-router-dom';
import { Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

import data from '../assets/fake-data/data-collection'


function SignUp(props) {
    return (
        <div>

            <section className="bg-sign-in">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content-left vertical-carousel">
                                <div className="content-slide">
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
                        </div>
                        <div className="col-md-6">
                            <div className="sign-in-form style2">
                                <h2>SIGN UP</h2>
                                <p>Welcome back! Please enter your details</p>
                                <form action="#" id="contactform">
                                    <fieldset><input id="name" name="name" tabIndex="1" aria-required="true" required="" type="text" placeholder="Your full name" /></fieldset>
                                    <fieldset> <input  name="email" tabIndex="2" aria-required="true"  type="email" placeholder="Your email" required="" /></fieldset>
                                    <fieldset> <input id="showpassword" name="password" tabIndex="2" aria-required="true"  type="password" placeholder="Set your password" required="" /></fieldset>
                                    <button className="tf-button submit" type="submit">SIGN UP</button>
                                </form>
                                <div className="or"><span>login with</span></div>

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

export default SignUp;