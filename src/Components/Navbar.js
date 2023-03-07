import React from 'react';
import '../Styles/Navbar.scss';
import Logo from '../Assets/Logo.png';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Styles/Menu.scss';

export default function Navbar() {
  const links = ['Roster', 'Discography', 'About', 'Contact'];
  return (
    <div className="Navbar">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>
      <NavLinks links={links} />
      <Menu />
    </div>
  );
}

const Menu = () => {
  const [clicked, setClicked] = useState(false);
  const styles = clicked ? 'open' : 'closed';
  return (
    <div className={`Menu ${styles}`} onClick={() => setClicked(!clicked)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
