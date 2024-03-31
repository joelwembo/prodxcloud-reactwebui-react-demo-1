import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/pagetitle/PageTitle';
import Team2 from '../components/team/Team2';
import Partner from '../components/partner/Partner';
import Footer from '../components/footer';
import dataTeam from '../assets/fake-data/data-team';
import dataPartner from '../assets/fake-data/data-partner';

import img from '../assets/images/team/team-details.jpg'
import icon1 from '../assets/images/svg/email-2.svg'
import icon2 from '../assets/images/svg/phone-2.svg'


function OurTeam(props) {
    return (
        <div className='team-page'>

            <PageTitle title='OUR TEAM' />

            <section className="tf-section tf-team-detail">
                <div className="tf-container">
                    <div className="row ">   
                        <div className="col-md-6">
                            <div className="swiper-container team-details ">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="slider-item">
                                            <img src={img} alt="Binabox" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-detail">
                                <p className="position">WEB DESIGNER</p>
                                <h2 className="name">Tony Wings</h2>
                                <h3 className="title">About</h3>
                                <p className="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </p>
                                <h3 className="title mb14">Contact</h3>
                                <div className="contact-infor">
                                    <div className="contact-infor-box">
                                        <span className="icon">
                                            <img src={icon1} alt="Binabox" />
                                        </span>
                                        <p>Info@yourcompany.com</p>
                                    </div>
                                    <div className="contact-infor-box">
                                        <span className="icon">
                                            <img src={icon2} alt="Binabox" />
                                        </span>
                                        <p>+84 0977425031</p>
                                    </div>
                                </div>
                                <ul className="social-item">
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team2 data={dataTeam} /> 

            <Partner data={dataPartner} />

            <Footer />
            
        </div>
    );
}

export default OurTeam;