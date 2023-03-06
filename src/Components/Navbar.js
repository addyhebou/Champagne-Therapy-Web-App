import React from 'react';
import '../Styles/Navbar.scss';
import Logo from '../Assets/Logo.png';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  return (
    <div className="nav-icon1">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
