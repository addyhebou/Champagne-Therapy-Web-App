import BlockSegment from './BlockSegment';
import TextField from './TextField';
import Playlists from './Playlists';
import {
  CTMG_GROUP_IMG_URL,
  FRANK_LOOKING_AT_AWARDS_URL,
  JAM_SESSION_VIDEO_URL,
} from '../Constants/media';

export default function HomeContent() {
  return (
    <div>
      <BlockSegment
        orientation="left"
        header={'ROSTER'}
        route="/roster"
        description="The Champagne Music Therapy Group team includes a diverse array of songwriters, producers, and artists."
        component={
          <TextField value={''} placeholder="Search our songwriters" />
        }
        secondaryDescription="Or view our entire roster"
        buttonText="View All"
        videoURL={JAM_SESSION_VIDEO_URL}
        imageURL={CTMG_GROUP_IMG_URL}
        imageDescription={'The entire CTMG group'}
      />
      <BlockSegment
        orientation="right"
        header="DISCOGRAPHY"
        route="/discography"
        description="View all records produced or written by the Champagne Therapy Music Group. Or view all playlists curated by the Champagne Therapy Music Group"
        buttonText="View All"
        secondaryComponent={<Playlists />}
        imageURL={FRANK_LOOKING_AT_AWARDS_URL}
        imageDescription={
          'Tommy Brown and Mr. Franks acknowledging their recent plaques.'
        }
      />
    </div>
  );
}
