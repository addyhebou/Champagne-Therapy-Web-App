import { React, myRef } from 'react';
import BlockSegment from './BlockSegment.js';
import TextField from './TextField.js';
import Playlists from '../Components/Playlists.js';

export default function HomeContent({ scrollTarget }) {
  const jamSessionVideo =
    'https://storage.googleapis.com/champagne-media/Jam%20Session.mp4';
  const CTMGGroupImg =
    'https://storage.googleapis.com/champagne-media/CTMG%20Group.png';
  const lookingAtAwardsImg =
    'https://storage.googleapis.com/champagne-media/Looking%20At%20Awards.png';
  return (
    <div ref={scrollTarget}>
      <BlockSegment
        orientation="left"
        header="ROSTER"
        route="/roster"
        description="The Champagne Music Therapy Group team includes a diverse array of songwriters, producers, and artists."
        component={<TextField placeholder="Search our songwriters" />}
        secondaryDescription="Or view our entire roster"
        buttonText="View All"
        secondaryComponent={null}
        videoURL={jamSessionVideo}
        imageURL={CTMGGroupImg}
        imageDescription={'The entire CTMG group'}
      />
      <BlockSegment
        orientation="right"
        header="DISCOGRAPHY"
        route="/discography"
        description="View all records produced or written by the Champagne Therapy Music Group. Or view all playlists curated by the Champagne Therapy Music Group"
        buttonText="View All"
        secondaryComponent={<Playlists />}
        imageURL={lookingAtAwardsImg}
        imageDescription={
          'Tommy Brown and Mr. Franks acknowledging their recent plaques.'
        }
      />
    </div>
  );
}
