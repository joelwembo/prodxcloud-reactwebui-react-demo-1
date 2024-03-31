import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer';

import data from '../assets/fake-data/data-blog'
import { Link } from 'react-router-dom';


function Blog(props) {
    return (
        <div>

            <PageTitle title='Blog' />


            <section className="tf-blog">
                <div className="tf-container">
                    <div className="row">
                        {
                            data.map(idx => (
                                <div key={idx.id} className="col-xl-4 col-lg-6 col-md-6">
                                    <article className="tf-blog-item">
                                        <div className="image">
                                            <Link to="/blog-details"><img src={idx.img} alt="Binabox" /></Link>
                                            <Link to="#" className="category">NFT</Link>
                                        </div>
                                        <div className="meta">
                                            <span className="admin"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0C7.09223 0 4.72656 2.36566 4.72656 5.27344C4.72656 8.18121 7.09223 10.5469 10 10.5469C12.9078 10.5469 15.2734 8.18121 15.2734 5.27344C15.2734 2.36566 12.9078 0 10 0Z" fill="#21E786"/>
                                                <path d="M16.5612 13.992C15.1174 12.5261 13.2035 11.7188 11.1719 11.7188H8.82812C6.79656 11.7188 4.88258 12.5261 3.43883 13.992C2.00215 15.4507 1.21094 17.3763 1.21094 19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141C18.7891 17.3763 17.9979 15.4507 16.5612 13.992Z" fill="#21E786"/>
                                                </svg>
                                                {idx.user}</span>
                                            <span className="date"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66602 7.50033C1.66602 6.25417 1.66602 5.63109 1.93396 5.16699C2.1095 4.86295 2.36198 4.61048 2.66602 4.43494C3.13012 4.16699 3.75319 4.16699 4.99935 4.16699H14.9993C16.2455 4.16699 16.8686 4.16699 17.3327 4.43494C17.6367 4.61048 17.8892 4.86295 18.0647 5.16699C18.3327 5.63109 18.3327 6.25417 18.3327 7.50033C18.3327 7.81186 18.3327 7.96763 18.2657 8.08366C18.2218 8.15967 18.1587 8.22279 18.0827 8.26667C17.9667 8.33366 17.8109 8.33366 17.4993 8.33366H2.49935C2.18781 8.33366 2.03204 8.33366 1.91602 8.26667C1.84001 8.22279 1.77689 8.15967 1.733 8.08366C1.66602 7.96763 1.66602 7.81186 1.66602 7.50033Z" fill="#21E786"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.2518 17.7475C1.66602 17.1618 1.66602 16.219 1.66602 14.3333V11C1.66602 10.5286 1.66602 10.2929 1.81246 10.1464C1.95891 10 2.19461 10 2.66601 10H17.3327C17.8041 10 18.0398 10 18.1862 10.1464C18.3327 10.2929 18.3327 10.5286 18.3327 11V14.3333C18.3327 16.219 18.3327 17.1618 17.7469 17.7475C17.1611 18.3333 16.2183 18.3333 14.3327 18.3333H5.66602C3.7804 18.3333 2.83759 18.3333 2.2518 17.7475ZM6.66602 13.1667C6.11373 13.1667 5.66602 13.6144 5.66602 14.1667C5.66602 14.719 6.11373 15.1667 6.66602 15.1667H13.3327C13.885 15.1667 14.3327 14.719 14.3327 14.1667C14.3327 13.6144 13.885 13.1667 13.3327 13.1667H6.66602Z" fill="#21E786"/>
                                                <path d="M5.83398 2.5L5.83398 5" stroke="#21E786" strokeWidth="2" strokeLinecap="round"/>
                                                <path d="M14.166 2.5L14.166 5" stroke="#21E786" strokeWidth="2" strokeLinecap="round"/>
                                                </svg>
                                                {idx.time}</span>
                                        </div>
                
                                        <h3 className="title"><Link to="/blog-details">{idx.title}</Link></h3>
                                    
                                        <p className="content">{idx.text}</p>

                                        <Link to="/item-details" className="btn-readmore">READ MORE <i className="fal fa-long-arrow-right"></i></Link>
                                        
                                        
                                    </article>
                                </div>
                            ))
                        }

                        
                        <div className="col-md-12 ">
                            <div className="tf-pagination">
                                <ul>
                                    <li className="btn-page"><Link to="#" ><i className="fas fa-angle-left"></i></Link></li>
                                    <li className="active"><Link to="#">2</Link></li>
                                    <li><Link to="#" >3</Link></li>
                                    <li><Link to="#">4</Link></li>
                                    <li className="continue"><Link to="#">...</Link></li>
                                    <li className="btn-page btn-next"><Link to="#"><i className="fas fa-angle-right"></i></Link></li>
                                    </ul>
                            </div>
                        </div>                 
                        
                    </div>
                </div>
            </section>

            <Footer />

            
        </div>
    );
}

export default Blog;