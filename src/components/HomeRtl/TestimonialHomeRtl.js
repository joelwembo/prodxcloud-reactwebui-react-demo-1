import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import user from '../../assets/images/testimonial-user.png';

function TestimonialHomeRtl({ className }) {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section
            className={`appie-testimonial-area pt-100 pb-160 ${className || ''}`}
            id="testimonial"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-testimonial-slider" style={{ position: 'relative' }}>
                            <span
                                className="prev slick-arrow"
                                style={{ display: 'block' }}
                                onClick={sliderNext}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fal fa-arrow-left" />
                            </span>
                            <Slider ref={sliderRef} dots arrows={false}>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">استجابة جايسون</h5>
                                        <span>14 أبريل 2022</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            لماذا أقول الفصل القديم الذي ينفث هدف أكسفورد المتوهج
                                            النازف ، هاري المستنقع اللامع يسدد تسديدة مذهلة.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">استجابة جايسون</h5>
                                        <span>14 أبريل 2022</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            لماذا أقول الفصل القديم الذي ينفث هدف أكسفورد المتوهج
                                            النازف ، هاري المستنقع اللامع يسدد تسديدة مذهلة.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">استجابة جايسون</h5>
                                        <span>14 أبريل 2022</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            لماذا أقول الفصل القديم الذي ينفث هدف أكسفورد المتوهج
                                            النازف ، هاري المستنقع اللامع يسدد تسديدة مذهلة.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                            <span
                                onClick={sliderPrev}
                                role="button"
                                tabIndex="-1"
                                className="next slick-arrow"
                                style={{ display: 'block' }}
                            >
                                <i className="fal fa-arrow-right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeRtl;
