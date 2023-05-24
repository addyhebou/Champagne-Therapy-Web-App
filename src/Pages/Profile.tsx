import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { WRITERS } from '../Constants/writerMetadata';
import ProfileContent from '../Components/ProfileContent';
import '../Styles/Profile.scss';

export default function Profile() {
  const location = useLocation();
  const { writer } = location.state;
  const data = WRITERS[writer];
  return (
    <div className="Profile">
      <Navbar />
      <ProfileContent
        name={data.name}
        imageURL={data.bigImageURL}
        biography={data.biography}
        socialURLs={data.socials}
      />
    </div>
  );
}
