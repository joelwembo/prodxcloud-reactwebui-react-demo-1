import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';

import { Accordion } from 'react-bootstrap-accordion';

import { Link } from 'react-router-dom';
import Footer from '../components/footer';

import data from '../assets/fake-data/data-collection'


function Collection(props) {
    return (
        <div className='page-collection'>
            <PageTitle title='Collection' />

            <section className="tf-collection-inner">
                <div className="tf-container">
                    <div className="row ">
                        <div className="col-lg-3 col-md-4">
                            <div className="sidebar sidebar-collection">
                                <div className="widget widget-clothing widget-accordion">

                                        <Accordion title='CLOTHING' className='widget-title active'>
                                            <div className="widget-content toggle-content">
                                                <form action="#" className="form-checkbox">
                                                    <label className="checkbox-item">
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox" />
                                                            <span className="btn-checkbox"></span>
                                                        </span>
                                                        <span>Combatant</span>                                              
                                                    </label>
                                                    <label className="checkbox-item">
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox" />
                                                            <span className="btn-checkbox"></span>
                                                        </span>
                                                        <span>Ninja</span>
                                                    </label>
                                                    <label className="checkbox-item">
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox"  />
                                                            <span className="btn-checkbox"></span>
                                                        </span>
                                                        <span>King</span>
                                                    </label>
                                                    <label className="checkbox-item">
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox" />
                                                            <span className="btn-checkbox"></span>
                                                        </span>
                                                        <span>Queen</span>
                                                    </label>
                                                    <label className="checkbox-item">
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox" />
                                                            <span className="btn-checkbox"></span>
                                                        </span>
                                                        <span>Robot</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Accordion>

                                </div>
                                <div className="widget widget-eyes widget-accordion">
                                    <Accordion title='EYES' className='widget-title'>
                                        <div className="widget-content">
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Yellow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Green</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox"  />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Mix</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Orange</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>glow</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Blue</span>
                                                    
                                                </label>
                                            </form>
                                        </div>
                                    </Accordion>
                                    
                                </div>
                                <div className="widget widget-face widget-accordion">
                                    <Accordion title='FACE' className='widget-title'>
                                        <div className="widget-content">
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Yellow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Green</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox"  />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Mix</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Orange</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>glow</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Blue</span>
                                                    
                                                </label>
                                            </form>
                                        </div>
                                    </Accordion>
                                    
                                </div>
                                <div className="widget widget-skin widget-accordion">
                                    <Accordion title='SKIN' className='widget-title'>
                                        <div className="widget-content">
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Yellow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Green</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox"  />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Mix</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Orange</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>glow</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Blue</span>
                                                    
                                                </label>
                                            </form>
                                        </div>
                                    </Accordion>
                                    
                                </div>
                                <div className="widget widget-background widget-accordion">
                                    <Accordion title='BACKGROUND' className='widget-title'>
                                        <div className="widget-content">
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Yellow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Green</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox"  />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Mix</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Orange</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>glow</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Blue</span>
                                                    
                                                </label>
                                            </form>
                                        </div>
                                    </Accordion>
                
                                </div>
                                <div className="widget widget-special widget-accordion">
                                    <Accordion title='SPECIAL' className='widget-title'>
                                        <div className="widget-content">
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Cat</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Sakura</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox"  />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Snake</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Eath</span>
                                                    
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox"></span>
                                                    </span>
                                                    <span>Water</span>
                                                    
                                                </label>
                                            </form>
                                        </div>
                                    </Accordion>
             
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 ">
                            <div className="top-option">
                                <h2 className="heading">All Items</h2>
                                
                                <div className="widget widget-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search NFT" required="" />
                                        <Link to className="btn-search"><i className="icon-fl-search-filled"></i></Link>
                                    </form>
                                </div>
                                
                            </div>
                            <ul className="filter-content">
                                <li><Link to="#">King <i className="fal fa-times"></i></Link></li>
                                <li><Link to="#">Mix <i className="fal fa-times"></i></Link></li>
                                <li><Link to="#">Skacura <i className="fal fa-times"></i></Link></li>
                                <li><Link to="#">Clear All</Link></li>
                            </ul>
                            <div className="row">
                                {
                                    data.slice(0,9).map(idx => (
                                        <div key={idx.id} className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src={idx.img} alt="Binabox" />
                                                </div>
                                                <h6 className="name"><Link to="/item-details">{idx.title}</Link></h6>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                             
                        </div>
                    </div>
                    
                </div>
            </section>
                
            <Footer />
            
        </div>
    );
}

export default Collection;