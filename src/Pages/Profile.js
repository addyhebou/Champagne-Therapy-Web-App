import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { writers } from '../Constants/writerMetadata.ts';
import ProfileContent from '../Components/ProfileContent';
import '../Styles/Profile.scss';

export default function Profile() {
  const location = useLocation();
  const { writer } = location.state;
  const data = writers[writer];
  console.log(data);
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
