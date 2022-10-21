import React from 'react';
import '../Styles/Navbar.scss';
import Logo from '../Assets/Logo.png';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = ['Roster', 'Discography', 'About', 'Contact'];
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <NavLinks links={links} />
    </div>
  );
}
