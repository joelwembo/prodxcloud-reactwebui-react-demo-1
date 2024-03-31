import React , { useState , useEffect } from 'react';

import { Link , NavLink } from 'react-router-dom';
import menus from '../../pages/menu';
import { Dropdown } from 'react-bootstrap';

import './styles.scss';
import logo from '../../assets/images/logo/logo.png';
import logodark from '../../assets/images/logo/logo_dark.png';

import DarkMode from './DarkMode';

// import Button from '../button';



const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };

    return (

        <header className={`header ${scroll ? 'is-fixed' : ''}`}>
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">                              
                            <div id="site-header-inner">                                 
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link to="/" rel="home" className="main-logo">
                                            <img id="logo_header" className='logo-dark' src={logodark} alt="Binasea" />
                                            <img id="logo_header" className='logo-light' src={logo} alt="Binasea" />
                                        </Link>
                                    </div>
                                </div>
                                
                               <div className="header-center">
                                <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data,idx) => (
                                                <li key={idx} onClick={()=> handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`} 
                                                
                                                >
                                                    <Link to={data.links}>{data.name}</Link>
                                                    {
                                                        data.namesub &&
                                                        <ul className="sub-menu">
                                                            {
                                                                data.namesub.map((submenu) => (
                                                                    <li key={submenu.id} className="menu-item"><NavLink to={submenu.links}>{submenu.sub}</NavLink></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                    
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                               </div>

                                <div className="header-right">
                                   
                                    <DarkMode />

                                    <Link to="/contact" className="tf-button discord"><i className="icon-fl-vt"></i><span>DISCORD</span></Link>
                                    <Link to="#" className="tf-button connect" data-toggle="modal" data-target="#popup_bid"> <i className="icon-fl-wallet"></i><span>CONNECT</span></Link>
                                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                                </div>  

                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>
       
    );
}

export default Header;