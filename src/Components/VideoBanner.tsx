import React from 'react';
import { STACKED_LOGO_URL, VIDEO_URL } from '../Constants/media';
import '../Styles/VideoBanner.scss';
import ScrollDownArrow from './ScrollDownArrow';

export default function VideoBanner() {
  return (
    <div className="VideoBanner">
      <video className="VideoBanner" autoPlay muted loop>
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <img src={STACKED_LOGO_URL} alt="logo" />
      <ScrollDownArrow />
    </div>
  );
}
