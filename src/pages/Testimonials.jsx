import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer';

import data from '../assets/fake-data/data-testimonials'
import { Link } from 'react-router-dom';


function Testimonials(props) {
    return (
        <div>
            <PageTitle title='TESTIMONIAL' />

            <section className="tf-testimonial-page ">
                <div className="tf-container">
                    <div className="row"> 
                        <div className="col-md-12">
                            <div className="tf-heading">
                                <h2 className="heading">WHAT PEOPLE SAY</h2>
                                <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        {
                            data.map(idx => (
                                <div key={idx.id} className="col-lg-4 col-md-6">
                                    <div className="tf-testimonial">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="50" viewBox="0 0 81 50" fill="none">
                                                <path opacity="0.5" d="M69.6 11.8V0.999998C68 0.799989 66.8 0.599991 65.4 0.599991C50.8 0.599991 42.4 6.79999 42.4 26.4C42.4 41.4 48 49.6 62 49.6C75.6 49.6 80.2 44.2 80.2 34.2C80.2 24.6 74.8 19.4 64.6 19.4C60.2 19.4 56.8 20.2 54.8 21.4L54.6 21.2C54.6 14.2 58.6 11.8 66.6 11.8C67.6 11.8 68.2 11.8 69.4 12L69.6 11.8ZM27.8 11.8V0.999998C26.2 0.799989 25.2 0.599991 23.6 0.599991C9 0.599991 0.6 6.79999 0.6 26.4C0.6 41.4 6.2 49.6 20.2 49.6C34 49.6 38.4 44.2 38.4 34.2C38.4 24.6 33 19.4 22.8 19.4C18.4 19.4 15.2 20.2 13 21.4L12.8 21.2C12.8 14.2 16.8 11.8 25 11.8C25.8 11.8 26.4 11.8 27.6 12L27.8 11.8Z" fill="#21E786"/>
                                            </svg>
                                        </div>
                                        <p>{idx.text}</p>
                                        <div className="author-tes">
                                            <div className="avt">
                                                <img src={idx.avt} alt="images" />
                                            </div>
                                            <div className="content">
                                                <Link to="/our-team">{idx.name}</Link>
                                                <h6>{idx.position}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            ))
                        }

                    </div>
                </div>
            </section>

            <Footer />

            
        </div>
    );
}

export default Testimonials;