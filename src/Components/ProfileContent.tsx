import React from 'react';
import '../Styles/ProfileContent.scss';
import AnimatedSliderButton from './Buttons/AnimatedSliderButton';

interface Props {
  name: string;
  imageURL: string;
  biography: string;
  socialURLs: Record<string, string>;
}
export default function ProfileContent({
  name,
  imageURL,
  biography,
  socialURLs,
}: Props) {
  const demo = '';
  return (
    <div className="ProfileContent">
      <div className="text">
        <h1>{name}</h1>
        <div className="socialIcons">
          {Object.keys(socialURLs).map(
            (platform) =>
              socialURLs[platform] && (
                <div>
                  <a
                    href={socialURLs[platform]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {platform}
                  </a>
                </div>
              )
          )}
        </div>
        <AnimatedSliderButton
          text={'View Discography'}
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