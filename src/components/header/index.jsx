import "./styles.scss";
import { createPortal } from "react-dom";

import logoIcon from "../../assets/icons/logo.svg";
import cartIcon from "../../assets/icons/cart.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

function Header({ isMobileMenuOpen, toggleMobileMenu }) {
  const navItems = ["Home", "Products"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const mobileNav = (
    <nav
      className={`header__nav-mobile ${
        isMobileMenuOpen ? "header__nav-mobile--open" : ""
      }`}
    >
      <button
        className="header__nav-mobile-close"
        onClick={toggleMobileMenu}
        aria-label="Close menu"
      >
        <img src={closeIcon} alt="Close menu" />
      </button>
      <ul className="header__nav-mobile-list">
        {navItems.map((item, idx) => (
          <li key={idx} className="header__nav-mobile-item">
            <a
              href={`#${item.toLowerCase()}`}
              className="header__nav-mobile-link"
              onClick={toggleMobileMenu}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      <header className="header">
        <div className="header__container">
          <button 
            className="header__logo" 
            onClick={scrollToTop}
            aria-label="Go to top"
          >
            <img
              src={logoIcon}
              alt="Space Logo"
              className="header__logo-img"
            />
          </button>

          <nav className="header__nav-desktop">
            <ul className="header__nav-desktop-list">
              {navItems.map((item, idx) => (
                <li key={idx} className="header__nav-desktop-item">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="header__nav-desktop-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__right">
            <button className="header__cart-btn" aria-label="Shopping cart">
              <img
                src={cartIcon}
                alt="Cart"
                className="header__cart-icon"
              />
            </button>

            <button
              className="header__burger"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <img
                src={isMobileMenuOpen ? closeIcon : menuIcon}
                alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="header__burger-icon"
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && createPortal(mobileNav, document.body)}
    </>
  );
}

export default Header;
