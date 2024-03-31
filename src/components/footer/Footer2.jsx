import React , {useState , useEffect} from 'react';

import { Link } from 'react-router-dom';
import './styles.scss';

import logo from '../../assets/images/logo/logo-footer.png';


function Footer2(props) {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer className="footer style-2">
                <div className="footer-inner">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">JOIN OUR COMMUNITY</h2>
                                <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <div className="group-btn">
                                    <Link to="#" className="tf-button discord" data-toggle="modal" data-target="#popup_bid"><i className="icon-fl-vt"></i><span>DISCORD</span></Link>
                                    <Link to="/collection" className="tf-button">WHITELIST NOW</Link>
                                </div>
                                <form action="#" id="subscribe-form">
                                    <input type="email" placeholder="Enter your email" required="" id="subscribe-email" />
                                    <button className="tf-button" type="submit" id="subscribe-button">SUBSCRIBE</button>
                                </form>

                                <ul className="social-item">
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="#"><i className="icon-fl-tik-tok-2"></i></Link></li>
                                    <li><Link to="#"><i className="icon-fl-vt"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-inner">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bottom">
                                
                                   <div className="content-left">
                                        <img src={logo} alt="Binabox" />
                                        <p className="copy-right">BINABOX 2022 - ALL rights reserved</p>
                                   </div>

                                    <ul className="menu-bottom">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about-v1">About</Link></li>
                                        <li><Link to="/roadmap-v1">Roadmap</Link></li>
                                        <li><Link to="/our-team">Our Team</Link></li>
                                        <li><Link to="/faq-v1">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
            </footer>
    );
}

export default Footer2;