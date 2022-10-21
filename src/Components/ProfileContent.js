import React from 'react';
import '../Styles/ProfileContent.scss';
import AnimatedSliderButton from './Buttons/AnimatedSliderButton.js';

export default function ProfileContent({
  name,
  imageURL,
  biography,
  socialURLs,
}) {
  return (
    <div className="ProfileContent">
      <div className="text">
        <h1>{name}</h1>
        {Object.values(socialURLs).map((value) => value && <p>{value}</p>)}
        <AnimatedSliderButton text={'View Discography'} />
        <h2>Biography</h2>
        <p>{biography}</p>
      </div>
      <img src={imageURL} alt={name} />
    </div>
  );
}
