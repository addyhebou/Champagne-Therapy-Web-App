import React from 'react';
import '../Styles/NavLinks.scss';

export default function NavLinks({ links }: { links: string[] }) {
  return (
    <ul className="NavLinks">
      {links.map((link) => (
        <a key={link} href={`/${link.toLowerCase()}`}>
          {link}
        </a>
      ))}
    </ul>
  );
}
