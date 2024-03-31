import React from 'react';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button/Button';
import Button02 from '../button/Button02';
import img1 from '../../assets/images/slider/slider-8.png'
import img2 from '../../assets/images/slider/slider-7.png'
import img3 from '../../assets/images/slider/slider-6.png'


function Banner03(props) {
    const {data} = props;
    return (
        <section className="tf-slider home3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                        <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home"
                            loop= {true}
                        >
                        {
                            data.slice(0,2).map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="slider-item">
                                            <div className="tf-slider-item style-3">
                                                <div className="content-inner">
                                                    
                                                    <div className="text-typing">
                                                        <h1 className="heading mb0">WITH</h1>
                                                        <div className="animate-contain">
                                                            <div className="animated-text">
                                                                <span>Binabox</span>
                                                                <span>Music</span>
                                                                <span>NFT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h1 className="heading"> {idx.title} </h1>
                                                    <p className="sub-heading">{idx.desc}</p>
                                                    <div className="counter-wrap">
                                                        <div className="tf-counter">
                                                            <div className="content">
                                                                <span className="counter-number" data-to="2240" data-speed="2000" >2240</span>+
                                                            </div>
                                                            <h6>Total Iteam</h6>
                                                        </div> 
                                                        <div className="tf-counter">
                                                            <div className="content">
                                                                <span className="counter-number" data-to="1000" data-speed="2000" >1000</span>+
                                                            </div>
                                                            <h6>Profiles Whitelisted</h6>
                                                        </div>  
                                                    </div>
                                                    <div className="btn-slider ">
                                                        <Button path='#' title='CONNECT WALLET' />
                                                        <Button02 path='/collection' title='WHITELIST NOW' />
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img src={img1} alt="Binabox" className="img ani5" />
                                                    <img src={img2} alt="Binabox" className="ani4 img-1" />
                                                    <img src={img3} alt="Binabox" className="ani5 img-2" />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>

                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner03;