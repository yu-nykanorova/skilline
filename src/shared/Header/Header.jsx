import { useState, useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Burger } from "../components/Burger";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) { // или твой breakpoint из @include tablet
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="mi header-container">
        <div className="header__logo">
          <Logo isFilled={true} isWhite={false} />
        </div>
        <div className="header__nav">
          <div className={`header__menu ${menuOpen ? "is-open" : ""}`}>
            <Link className="link header__link" to="/" onClick={closeMenu}>Home</Link>
            <Link className="link header__link" to="/careers" onClick={closeMenu}>Careers</Link>
            <Link className="link header__link" to="/blog" onClick={closeMenu}>Blog</Link>
            <Link className="link header__link" to="/about" onClick={closeMenu}>About Us</Link>
          </div>
          <Burger className={`header__burger ${menuOpen ? "is-active" : ""}`} onClick={toggleMenu}/>
          <div className="header__buttons">
            <Link className="link header__login-button" to="/login">Login</Link>
            <Link className="link header__signup-button" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>  
    </header>
  )
}
