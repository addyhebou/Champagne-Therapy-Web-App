import React from 'react';
import '../Styles/ProfileContent.scss';
import AnimatedSliderButton from './Buttons/AnimatedSliderButton.js';

export default function ProfileContent({
  name,
  imageURL,
  biography,
  socialURLs,
}) {
  console.log(socialURLs);
  return (
    <div className="ProfileContent">
      <div className="text">
        <h1>{name}</h1>
        <div className="socialIcons">
          {Object.entries(socialURLs).map(
            ([key, value]) =>
              value && (
                <div>
                  <a href={value} target="_blank" rel="noreferrer">
                    {key}
                  </a>
                </div>
              )
          )}
        </div>
        <AnimatedSliderButton
          text={'View Discography'}
          width={'large'}
          link={socialURLs['Spotify']}
        />
        <>
          <h2>Biography</h2>
          <p>{biography}</p>
        </>
      </div>
      <div className="media">
        <img src={imageURL} alt={name} />
      </div>
    </div>
  );
}
