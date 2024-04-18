import React, { useEffect, useState } from 'react';
import productImg from '../../assets/images/shop-grid-1.jpg';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import Card from '../Product/Card';
import SideBarFilter from './SideBarFilter';

function Shops() {
    const [drawer, drawerAction] = useToggle(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews action={drawerAction.toggle} />
            <HeroNews
                title="Shop Products"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/shops', title: 'Shop Products' },
                ]}
            />
            <div className="appie-shop-grid-area pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-2 order-lg-1">
                            <SideBarFilter />
                        </div>
                        <div className="col-lg-9 order-1 order-lg-2">
                            <div className="shop-grid-topbar d-flex justify-content-between align-items-center">
                                <span>
                                    Showing all <span>12</span> results
                                </span>
                                <select id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="vw">VW</option>
                                    <option value="audi" selected>
                                        Audi
                                    </option>
                                </select>
                            </div>
                            <div className="row">
                                {products && products.length > 0 ? (
                                    products.map((value) => (
                                        <div className="col-lg-4 col-md-6">
                                            <Card cardData={value} />
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-shop-box">
                                                <div className="thumb text-center">
                                                    <img src={productImg} alt="" />
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
                                                    <a href="#">Smartwatch with Music</a>
                                                    <div className="pricing">
                                                        <div className="discount-price">
                                                            $158.00{' '}
                                                        </div>
                                                        <div className="regular-price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="col-lg-12">
                                    <div className="bisylms-pagination">
                                        <span className="current">1</span>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a className="next" href="#">
                                            next<i className="fal fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Shops;
