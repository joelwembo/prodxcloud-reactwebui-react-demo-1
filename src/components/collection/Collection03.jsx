import React from 'react';
import PropTypes from 'prop-types';

import { Navigation , Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

Collection03.propTypes = {
    data : PropTypes.array,
};

function Collection03(props) {
    const {data} = props;
    return (
        <section className="tf-collection-ss">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">

                            <Swiper
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    500: {
                                        slidesPerView: 2,
                                        },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    991: {
                                        slidesPerView: 4,
                                    },
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
   
                                modules={[Autoplay, Navigation]}
                                className="collection-1 visible"
                            >

                                {
                                    data.slice(20,26).map(idx => (
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
            </section>
    );
}

export default Collection03;