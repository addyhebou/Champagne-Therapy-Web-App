import React from 'react';
import { useLocation } from 'react-router-dom';
import { WRITERS } from '../Constants/writerMetadata';
import ProfileContent from '../Components/ProfileContent';
import '../Styles/Profile.scss';

export default function Profile() {
  const location = useLocation();
  const { writer } = location.state;

  const findTheWriterObjectWithWriterName = (
    name: string
  ): string | undefined => {
    return Object.entries(WRITERS).find((writer) => {
      return writer[1].name.toLowerCase().includes(name.toLowerCase());
    })?.[0];
  };

  const writerObject = findTheWriterObjectWithWriterName(writer);
  if (!writerObject) return <></>;
  const data = WRITERS[writerObject];
  return (
    <div className="Profile">
      <ProfileContent
        name={data.name}
        imageURL={data.bigImageURL}
        biography={data.biography}
        socialURLs={data.socials}
      />
    </div>
  );
}
