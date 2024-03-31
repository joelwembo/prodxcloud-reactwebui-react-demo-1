import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss'


function PageTitle(props) {
    const {title} = props;

    return (
        <section className="tf-page-title">    
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="page-title-heading">{title}</h2>
                        <ul className="breadcrumbs">
                            <li><Link to="/">HOME</Link></li>
                            <li>{title}</li>
                        </ul> 
                    </div>
                </div>
            </div>                    
        </section>

    );
}

export default PageTitle;