import './index.css';
import logo from '../../assets/images/Leaf.svg';
import icon from '../../assets/images/material-symbols_menu.png';
import Container from '../Container/container.tsx';

function Header() {
  return (
    <div>
      <Container>
        <nav className="navbar">
          <ul className="navbar__list navbar__list_mobile">
            <li className="navbar__item">Home</li>
            <li className="navbar__item">Pricing</li>
            <li className="navbar__item">Blog</li>
          </ul>
          <div className="logo">
            <img src={logo} alt="logo" className="logo__img" />
            <span className="logo__title">Trail Bliss</span>
          </div>
          <ul className="navbar__list navbar__list_mobile">
            <li className="navbar__item">Testimonial</li>
            <li className="navbar__item">FAQ</li>
            <li className="navbar__item navbar__item_right-none">
              <button type="button" className="navbar__btn">
                Contact Us
              </button>
            </li>
          </ul>
          <div className="icon">
            <img src={icon} alt="icon" className="logo__img" />
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
