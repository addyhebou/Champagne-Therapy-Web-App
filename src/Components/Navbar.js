import React from 'react';
import '../Styles/Navbar.scss';
import Logo from '../Assets/Logo.png';
import NavLinks from './NavLinks';

export default function Navbar() {
  const links = ['Roster', 'Discography', 'About', 'Contact'];
  return (
    <div className="Navbar">
      <img src={Logo} alt="Logo" />
      <NavLinks links={links} />
    </div>
  );
}
