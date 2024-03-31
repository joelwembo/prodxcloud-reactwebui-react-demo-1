import React  from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap-accordion';

import './styles.scss'

Faqs2.propTypes = {
    data : PropTypes.array,
};

function Faqs2(props) {

    const {data} = props;
    return (
        <section className="tf-faq tf-section">
                <div className="tf-container">
                    <div className="col-md-12 ">
                        <div className="tf-heading mb60 wow fadeInUp">
                            <h2 className="heading">FAQS</h2>
                        </div>
                    </div> 
                   <div className="row justify-content-center">
                        <div className="col-md-8 wow fadeInUp">
                            <div className="tf-flat-accordion2">
                                {
                                    data.slice(0,4).map(idx => (
                                        <Accordion show={idx.show} key={idx.id} title={idx.title} className='flat-toggle h6'>
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

export default Faqs2;