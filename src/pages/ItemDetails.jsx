import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';

import Footer from '../components/footer';
import Collection03 from '../components/collection/Collection03';
import dataCollection from '../assets/fake-data/data-collection';
import { Link } from 'react-router-dom';

import img from '../assets/images/item-details.jpg'

function ItemDetails(props) {
    return (
        <div className='page-collection'>

            <PageTitle title='ITEM DETAIL' />

            <section className=" tf-item-detail ">
                <div className="tf-container">
                   <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="tf-item-detail-image">
                                <img src={img} alt="Binabox" />
                             
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="tf-item-detail-inner">
                                <h2 className="title">SKISIRS#4587</h2>
                                <p className="des">As the first hero of the Neoh Universe, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.
                                </p>
                                <div className="infor-item-wrap">
                                    <div className="infor-item-box">
                                        <div className="category">Clothing</div>
                                        <h4 className="name">SNAKE</h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Eyes</div>
                                        <h4 className="name">MIX</h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Face</div>
                                        <h4 className="name">GREEN</h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Skin</div>
                                        <h4 className="name">GREEN</h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Background</div>
                                        <h4 className="name">GREEN LIGHT</h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Special</div>
                                        <h4 className="name">CAT</h4>
                                    </div>
                                </div>
                                <div className="price">
                                    <span className="heading">PRICE:</span>
                                    <span>0.15 ETH</span>
                                </div>
                                <div className="group-btn">
                                    <Link to="#" className="tf-button opensea"><i className="icon-fl-bag"></i> BUY ON OPENSEA</Link>
                                   <div className="group-2">
                                        <Link to="#" className="tf-button style-2 "><i className="icon-fl-vt"></i> JOIN DISCORD</Link>
                                        <Link to="#" className="tf-button style-2 twitter"><i className="fab fa-twitter"></i> JOIN TWITTER</Link>
                                   </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </section>

            <Collection03 data={dataCollection} />

            <Footer />
            
        </div>
    );
}

export default ItemDetails;