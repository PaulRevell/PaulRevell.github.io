// src/components/Header.js
import './Header.css';
const bgImage = process.env.PUBLIC_URL + '/header.webp';

const Header = () => {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1>Paul Revell</h1>
      <h2>Software Engineer & Game Developer</h2>
      <div className="profile-pic">
        <img src="portrait.webp" alt="Paul Revell" />
        
      </div>

    </header>
  );
};

export default Header;