import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../shared/components/Logo"; 

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container mi footer-container">
        <div className="footer__logo-info">
          <div className="footer__logo">
            <Logo isFilled={false} isWhite={true} />
          </div>
          <div className="footer__company-desc">Virtual Class for Zoom</div>
        </div>
        <div className="footer__subscribe">
          <div className="subscribe-title">Subscribe to get our Newsletter</div>
          <div className="subscribe-data">
            <input type="email" className="subscribe-email" placeholder="Your Email" />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__info-menu">
            <Link className="link footer__link">Careers</Link>
            <Link className="link footer__link">Privacy Policy</Link>
            <Link className="link footer__link">Terms & Conditions</Link>
          </div>
          <div className="footer__copyright">
            © {currentYear} Class Technologies Inc. 
          </div>
        </div>
      </div>
    </footer>
  )
}
