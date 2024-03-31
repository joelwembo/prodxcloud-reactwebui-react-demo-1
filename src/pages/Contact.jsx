import React from 'react';

import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer';

import icon1 from '../assets/images/svg/loaction.svg'
import icon2 from '../assets/images/svg/email.svg'
import icon3 from '../assets/images/svg/phone.svg'

function Contact(props) {
    return (
        <div>

            <PageTitle title='Contact' />

            <section className="tf-contact ">
                <div className="tf-container">
                    <div className="row"> 
                        <div className="col-md-12">
                            <div className="tf-infor-wrap">
                                <div className="tf-infor">
                                    <div className="icon">
                                        <img src={icon1} alt="Binabox" />
                                    </div>
                                    <h3 className="title">Location</h3>
                                    <p className="sub-title">2163 Phillips Gap Rd West Jefferson</p>
                                </div>
                                <div className="tf-infor">
                                    <div className="icon">
                                        <img src={icon2} alt="Binabox" />
                                    </div>
                                    <h3 className="title">Email</h3>
                                    <p className="sub-title">Info.avitex@gmail.com</p>
                                </div>
                                <div className="tf-infor">
                                    <div className="icon">
                                        <img src={icon3} alt="Binabox" />
                                    </div>
                                    <h3 className="title">Phone</h3>
                                    <p className="sub-title">+1 666 8888</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center"> 
                        <div className="col-xl-6 col-lg-8 col-md-9">
                            <div className="tf-heading">
                                <h2 className="heading">Get In Touch</h2>
                                <p className="sub-heading">Browse through the most freuently asked questions</p>
                            </div>
                            <form action="contact/contact-process.php" method="post" id="commentform"  className="comment-form">
                                <div className="form-inner">
                                    <fieldset className="name">
                                        <input type="text" id="name" placeholder="Name" className="tb-my-input" name="name" tabIndex="2" aria-required="true" required="" />
                                    </fieldset>    
                                    <fieldset className="email">
                                        <input type="email" id="email" placeholder="Enter your email" className="tb-my-input" name="email" tabIndex="2" aria-required="true" required="" />
                                    </fieldset>
                                    <fieldset className="phone">
                                        <input type="tel" id="phone" placeholder="Phone Number" className="tb-my-input" name="phone" tabIndex="2" aria-required="true" required="" />
                                    </fieldset>
                                    
                                    <fieldset className="message">
                                        <textarea id="message" name="message" rows="4" placeholder="Message" tabIndex="4" aria-required="true" required=""></textarea>
                                    </fieldset>
                                </div>
                                <div className="btn-submit"><button className="tf-button style-2" type="submit">SEND MESSANGER</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            
        </div>
    );
}

export default Contact;