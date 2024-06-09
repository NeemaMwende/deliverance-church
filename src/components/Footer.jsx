import React from 'react';
import './Footer.css';
import footerBg from '../Images/meditation.jpeg';
import logo from '../Images/dclogo.png';

const Footer = () => {
  return (
    <footer className="footer section has-bg-image text-center" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#home" className="logo">
              <img src={logo} alt="grilli home" />
            </a>
            <address className="body-4">
              Restaurant St, Delicious City, Nairobi 9578, KE
            </address>
            <a href="mailto:booking@grilli.com" className="body-4 contact-link">booking@grilli.com</a>
            <a href="tel:+254768123456" className="body-4 contact-link">Booking Request : +254-768-123456</a>
            <p className="body-4">Open : 09:00 am - 01:00 pm</p>
            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>
            <p className="title-1">Get News & Offers</p>
            <p className="label-1">
              Subscribe us & Get <span className="span">25% Off.</span>
            </p>
            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                <input type="email" name="email_address" placeholder="Your email" autoComplete="off" className="input-field" />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>
                <span className="text text-2" aria-hidden="true">Subscribe</span>
              </button>
            </form>
          </div>
          <ul className="footer-list">
            <li><a href="#home" className="label-2 footer-link hover-underline">Home</a></li>
            <li><a href="#menu" className="label-2 footer-link hover-underline">Menus</a></li>
            <li><a href="#about" className="label-2 footer-link hover-underline">About Us</a></li>
            <li><a href="#chef" className="label-2 footer-link hover-underline">Our Chefs</a></li>
            <li><a href="#contact" className="label-2 footer-link hover-underline">Contact</a></li>
          </ul>
          <ul className="footer-list">
            <li><a href="#facebook" className="label-2 footer-link hover-underline">Facebook</a></li>
            <li><a href="#instagram" className="label-2 footer-link hover-underline">Instagram</a></li>
            <li><a href="#twitter" className="label-2 footer-link hover-underline">Twitter</a></li>
            <li><a href="#youtube" className="label-2 footer-link hover-underline">Youtube</a></li>
            <li><a href="#map" className="label-2 footer-link hover-underline">Google Map</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023 Grilli. All Rights Reserved | Crafted by <a href="https://github.com/NeemaMwende" target="_blank" className="link" rel='noreferrer'>Neema Mwende</a>
          </p>
        </div>
      </div>
      <a href="#top" className="back-top-btn active" aria-label="back to top">
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </footer>
  );
}

export default Footer;
