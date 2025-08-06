import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Logo } from "../../shared/components/Logo"; 

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const transition = {
    duration: 0.7,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }

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
            <motion.button
              type="submit"
              className="subscribe-button"
              whileHover={{
                scale: [1, 1.1, 1],
                transition: transition
              }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__info-menu">
            <Link to="careers" className="link footer__link">Careers</Link>
            <Link to="/" className="link footer__link">Privacy Policy</Link>
            <Link to="/" className="link footer__link">Terms & Conditions</Link>
          </div>
          <div className="footer__copyright">
            © {currentYear} Class Technologies Inc. 
          </div>
        </div>
      </div>
    </footer>
  )
}
