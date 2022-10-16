import React from 'react';
import '../Styles/VideoBanner.scss';
import ScrollDownArrow from '../Components/ScrollDownArrow';

export default function VideoBanner({ scrollFunction }) {
  const videoURL =
    'https://storage.cloud.google.com/champagne-media/Champagne%20Therapy%20Video.mp4';
  const logoStacked =
    'https://storage.googleapis.com/champagne-media/LogoStacked.png';
  return (
    <div className="VideoBanner">
      <video className="VideoBanner" autoPlay muted loop>
        <source src={videoURL} type="video/mp4" />
      </video>
      <img src={logoStacked} alt="logo" />
      <ScrollDownArrow scrollFunction={scrollFunction} />
    </div>
  );
}
