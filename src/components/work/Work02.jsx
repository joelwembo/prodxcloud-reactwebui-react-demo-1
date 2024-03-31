import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Work02.propTypes = {
    data : PropTypes.array,
};

function Work02(props) {
    const {data} = props;
    return (
        <section className="tf-work-ss">
                <div className="tf-container">
                    <div className="row">   
                        <div className="col-md-12">
                            <div className="title-ss wow fadeInUp">
                                <h3>HOW TO <span>BINABOX</span> WORK</h3>
                            </div>
                        </div>
                        {
                            data.map(idx => (
                                <div key={idx.id} className="col-xl-3 col-md-6 ">
                                    <div className="tf-work style-2 wow fadeInUp">
                                            <div className="image">
                                                <img id="work-5" src={idx.img} alt="Binabox" />
                                            </div>
                                            <h5 className="step">STEP {idx.id}</h5>
                                            <h4 className="title"><Link to="#">{idx.title}</Link></h4>
                                    </div>
                                </div> 
                            ))
                        }
                        
                    </div>
                </div>
            </section>
    );
}

export default Work02;