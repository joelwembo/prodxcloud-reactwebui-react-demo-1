import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss'

Work.propTypes = {
    data: PropTypes.array,
};

function Work(props) {
    const {data} = props;
    return (
        <section className="tf-section section-work">
                <div className="tf-container">
                    <div className="row">   
                        <div className="col-md-12 ">
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading">HOW TO <span> BINABOX </span>WORK</h2>
                            </div>
                        </div> 
                        {
                            data.map(idx => (
                                <div key={idx.id} className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="tf-work wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="image">
                                            <img id="work-2" src={idx.img} alt="Binabox" />
                                        </div>
                                        <h6 className="title"><Link to="#">{idx.title}</Link></h6>
                                        <p className="content">{idx.text}</p>
        
                                    </div>
                                </div>  
                            ))
                        }                        
                        
                    </div>

                </div>
            </section>
    );
}

export default Work;