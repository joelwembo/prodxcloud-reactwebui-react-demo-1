import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap-accordion';

import './styles.scss'

Faqs.propTypes = {
    data: PropTypes.array,
};

function Faqs(props) {

    const {data} = props;
    return (
        <section className="tf-faq tf-section">
                <div className="tf-container">
                   <div className="row">
                        <div className="col-md-12 ">
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading">FAQS</h2>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">
                                {
                                    data.slice(0,3).map(idx => (
                                        <Accordion show={idx.show} key={idx.id} title={idx.title} className='flat-toggle h6'>
                                            <p className="toggle-content">{idx.text} </p>
                                        </Accordion>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">
                                {
                                    data.slice(3,6).map(idx => (
                                        <Accordion key={idx.id} title={idx.title} className='flat-toggle h6'>
                                            <p className="toggle-content">{idx.text} </p>
                                        </Accordion>
                                    ))
                                }

                            </div>
                        </div>


                   </div>
                </div>
            </section>
    );
}

export default Faqs;