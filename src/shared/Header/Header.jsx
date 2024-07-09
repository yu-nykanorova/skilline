import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Header = () => {
  return (
    <header className="header">
      <div className="container mi header-container">
        <div className="header__logo">
          <Logo isFilled={true} isWhite={false} />
        </div>
        <div className="header__nav">
          <div className="header__menu">
            <Link className="link header__link" to="/">Home</Link>
            <Link className="link header__link" to="/careers">Careers</Link>
            <Link className="link header__link" to="/blog">Blog</Link>
            <Link className="link header__link" to="/about">About Us</Link>
          </div>
          <div className="header__buttons">
            <Link className="link header__login-button" to="/login">Login</Link>
            <Link className="link header__signup-button" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>  
    </header>
  )
}
