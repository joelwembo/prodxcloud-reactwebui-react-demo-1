import React from 'react';

function SideBarFilter() {
    return (
        <>
            <div className="appie-shop-sidebar">
                <div className="shop-price-filter">
                    <h4 className="title">Filter by Price</h4>
                    <div className="price-range">
                        <div className="box-1"></div>
                        <div className="box-2"></div>
                    </div>
                    <div className="main-filter-price d-flex justify-content-between align-items-center">
                        <span>Price: $130 - $340</span>
                        <a href="#">Filter</a>
                    </div>
                </div>
                <div className="shop-category-widget">
                    <h4 className="title">Product Categories</h4>
                    <ul>
                        <li>
                            <a href="#">Classic</a>
                        </li>
                        <li>
                            <a href="#">Gadgets</a>
                        </li>
                        <li>
                            <a href="#">Chair & Tables</a>
                        </li>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Uncategorized</a>
                        </li>
                        <li>
                            <a href="#">Modern</a>
                        </li>
                    </ul>
                </div>
                <div className="shop-best-product-widget">
                    <h4 className="title">Best Seller</h4>
                    <div className="shop-product">
                        <div className="thumb">
                            <img src="assets/images/shop-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <a href="#">Razer Kraken Tournament</a>
                            <span>$44.00</span>
                        </div>
                    </div>
                    <div className="shop-product">
                        <div className="thumb">
                            <img src="assets/images/shop-2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <a href="#">iPhone 8 Plus Case</a>
                            <span>$44.00</span>
                        </div>
                    </div>
                    <div className="shop-product">
                        <div className="thumb">
                            <img src="assets/images/shop-3.jpg" alt="" />
                        </div>
                        <div className="content">
                            <a href="#">Mango Women’s Bag</a>
                            <span>$44.00</span>
                        </div>
                    </div>
                </div>
                <div className="shop-tags-bar">
                    <h4 className="title">Popular Tags</h4>
                    <ul>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">Modern</a>
                        </li>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Luxurious</a>
                        </li>
                        <li>
                            <a href="#">Classic</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Fashion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideBarFilter;
