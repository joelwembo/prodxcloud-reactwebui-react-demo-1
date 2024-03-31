import React from 'react';
import Button from '../button/Button';
import Button02 from '../button/Button02';

function Banner02(props) {
    return (
        <section className="tf-slider home2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="tf-slider-item style-2">
                                <div className="content-inner wow fadeInUp" data-wow-delay="0.4s">
                                    <h1 className="heading">EXPLORE NFT COLLECTION 
                                    </h1>
                                    <p className="sub-heading wow fadeInUp" data-wow-delay="0.6s">We are the best way to check the rarity of NFT collection</p>
                                    <div className="btn-slider wow fadeInUp" data-wow-delay="0.8s">
                                        <Button title='CONNECT WALLET' path='#' />
                                        <Button02 title='WHITELIST NOW' path='/collection' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
}

export default Banner02;