import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Team2.propTypes = {
    data : PropTypes.array,
};

function Team2(props) {

    const {data} = props;
    return (
        <section className="tf-section team tf-team-ss">
                <div className="icon">
                    <svg width="250" height="473" viewBox="0 0 250 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_2673_3126)">
                        <path d="M149.737 53.4772L90.521 170.211L214.959 129.532L239.19 203.656L114.752 244.335L231.486 303.551L196.209 373.095L79.4746 313.879L120.153 438.317L46.0298 462.548L5.35093 338.11L-53.865 454.844L-123.409 419.566L-64.1928 302.832L-188.631 343.511L-212.862 269.388L-88.4239 228.709L-205.158 169.493L-169.881 99.949L-53.1464 159.165L-93.8253 34.727L-19.7016 10.4959L20.9773 134.934L80.1932 18.1996L149.737 53.4772Z" fill="url(#paint0_linear_2673_3126)"/>
                        </g>
                        <defs>
                        <filter id="filter0_f_2673_3126" x="-222.861" y="0.496094" width="472.051" height="472.052" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2673_3126"/>
                        </filter>
                        <linearGradient id="paint0_linear_2673_3126" x1="-187.519" y1="134.721" x2="213.848" y2="338.323" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="var(--primary-color35)"/>
                        <stop offset="1" stopColor="var(--primary-color35)" stopOpacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>                              
                </div>
                <div className="tf-container">
                    <div className="row justify-content-center">   
                        <div className="col-md-12 ">
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading">OUR TEAM</h2>
                            </div>
                        </div> 

                        {
                            data.map(idx => (
                                <div key={idx.id} className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="tf-team">
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
                            ))
                        }
                        

                          
                    </div>
                </div>
            </section>
    );
}

export default Team2;