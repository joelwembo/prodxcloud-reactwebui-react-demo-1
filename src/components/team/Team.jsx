import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';
import './styles.scss'

Team.propTypes = {
    data: PropTypes.array,
};

function Team(props) {

    const {data} = props;

    return (
        <section className="tf-section team">
            <div className="tf-container">
                <div className="row justify-content-center">   
                    <div className="col-md-12 ">
                        <div className="tf-heading mb60 wow fadeInUp">
                            <h2 className="heading">OUR TEAM</h2>
                        </div>
                    </div> 
                    <div className="col-md-12 wow fadeInUp">
                        <Swiper
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    550: {
                                        slidesPerView: 2,
                                        },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    991: {
                                        slidesPerView: 4,
                                    },
                                }}

                                loop={true}
               
   
                                modules={[Autoplay, Navigation]}
                                className="team-slider"
                            >
                                {
                                    data.slice(0,4).map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="slider-item">
                                                <div className="tf-team ">
                                                    <div className="image">
                                                        <img src={idx.img} alt="Binabox" />
                                                    </div>
                                                    <h4 className="name"><Link to="/our-team">{idx.name}</Link></h4>
                                                    <p className="position">{idx.position}</p>
                                                    <ul className="social">
                                                        {
                                                            idx.social.map(idx => (
                                                                <li key={idx.id}><Link to="#"><i className={idx.icon}></i></Link></li>
                                                            ))
                                                        }
            
                                                    </ul>
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

export default Team;