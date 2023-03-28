import "./header.css";
import Hero from '../../assets/images/homepage-banner.png';

const Header = () => {
  return (
    <header className="header-img">
      <img src={Hero} alt="hero" className="hero" />
    </header>
  );
};

export default Header;
