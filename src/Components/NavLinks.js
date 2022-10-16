import React from 'react';
import '../Styles/NavLinks.scss';

export default function NavLinks({ links }) {
  return (
    <ul className="NavLinks">
      {links.map((link) => {
        return <li>{link}</li>;
      })}
    </ul>
  );
}
