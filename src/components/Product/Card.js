import React from 'react';
import productImg from '../../assets/images/shop-grid-1.jpg';

function Card({ cardData }) {
    console.log(cardData);
    const handleError = (e) => {
        e.target.src = productImg;
    };
    return (
        <>
            <div className="single-shop-box">
                <div className="thumb text-center">
                    <img
                        className="appie-card-img"
                        onError={handleError}
                        src={cardData.image}
                        alt=""
                    />
                    <div className="reborn">
                        <span>Sale</span>
                    </div>
                    <div className="cart-list-icon">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fal fa-shopping-bag"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fal fa-heart"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fal fa-eye"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star-half-alt"></i>
                        </li>
                    </ul>
                    <a href="#">{cardData.title}</a>
                    <div className="pricing">
                        <div className="discount-price">${cardData.price} </div>
                        <div className="regular-price">$180.00</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
