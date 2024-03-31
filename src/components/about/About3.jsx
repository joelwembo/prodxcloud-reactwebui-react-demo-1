import React from 'react';
import PropTypes from 'prop-types';
import Button02 from '../button/Button02';

About3.propTypes = {
    data : PropTypes.array,
};

function About3(props) {
    const {data} = props;
    return (
        <section className="tf-about-ss">
            <div className="icon">
                <svg width="254" height="426" viewBox="0 0 254 426" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_2258_552)">
                    <path d="M162.226 50.3816L109.596 154.133L220.194 117.978L241.73 183.858L131.132 220.012L234.883 272.642L203.529 334.452L99.7779 281.822L135.932 392.42L70.0528 413.956L33.8982 303.358L-18.7318 407.109L-80.541 375.755L-27.911 272.004L-138.509 308.158L-160.045 242.279L-49.4471 206.124L-153.198 153.494L-121.844 91.6849L-18.0931 144.315L-54.2477 33.7168L11.632 12.1807L47.7866 122.779L100.417 19.0276L162.226 50.3816Z" fill="url(#paint0_linear_2258_552)"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_2258_552" x="-172.045" y="0.180664" width="425.775" height="425.775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2258_552"/>
                    </filter>
                    <linearGradient id="paint0_linear_2258_552" x1="-137.521" y1="122.589" x2="219.206" y2="303.547" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="var(--primary-color35)"/>
                    <stop offset="1" stopColor="var(--primary-color35)" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            
                
            <div className="tf-container2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-ss wow fadeInUp">
                            <h3>ABOUT US</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                            
                        </div>
                    </div>

                    {
                        data.map(idx => (
                            <div key={idx.id} className="col-md-6 col-sm-6">
                                <div className="tf-step style2 wow fadeInUp">
                                    <div className="step-title">
                                        <div className="sub-number">
                                            0{idx.id}
                                        </div>
                                        <h3>{idx.title}</h3>
                                    </div>
                                    <p>{idx.text} </p>
                                </div>
                            </div>
                        ))
                    }

                <div className="col-md-12 wow fadeInUp">
                    <div className="btn">
                        <Button02 path='/about-v' title='READ MORE' />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default About3;