import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROSTER_MEMBERS } from '../Constants/writerMetadata';
import ProfileContent from '../Components/ProfileContent';

export default function Profile() {
  const location = useLocation();
  const { writer } = location.state;

  const findTheWriterObjectWithWriterName = (
    name: string
  ): string | undefined => {
    return Object.entries(ROSTER_MEMBERS).find((writer) => {
      return writer[1].name.toLowerCase().includes(name.toLowerCase());
    })?.[0];
  };

  const writerObject = findTheWriterObjectWithWriterName(writer);
  if (!writerObject) return <></>;
  const data = ROSTER_MEMBERS[writerObject];
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
