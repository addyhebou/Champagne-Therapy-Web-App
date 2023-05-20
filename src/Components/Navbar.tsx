import React from 'react';
import '../Styles/Navbar.scss';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Styles/Menu.scss';
import { CHAMPAGNE_LOGO_URL } from '../Constants/media';
import { links } from '../Constants/constants';

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <img className="Logo" src={CHAMPAGNE_LOGO_URL} alt="Logo" />
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
