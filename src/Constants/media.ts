import { getNewReleaseDescription } from '../Utils/copy';
import { NewRelease, RosterMember } from './types';
import { ROSTER_MEMBERS } from './writerMetadata';

export const CHAMPAGNE_LOGO_URL =
  'https://storage.googleapis.com/champagne-media/Logo.png';

export const VIDEO_URL =
  'https://storage.cloud.google.com/champagne-media/Champagne%20Therapy%20Video.mp4';
export const STACKED_LOGO_URL =
  'https://storage.googleapis.com/champagne-media/LogoStacked.png';

export const JAM_SESSION_VIDEO_URL =
  'https://storage.googleapis.com/champagne-media/Jam%20Session.mp4';
export const CTMG_GROUP_IMG_URL =
  'https://storage.googleapis.com/champagne-media/CTMG%20Group.png';
export const FRANK_LOOKING_AT_AWARDS_URL =
  'https://storage.googleapis.com/champagne-media/Looking%20At%20Awards.png';

export const PLAYLISTS = [
  {
    title: 'Tommy Brown',
    link: 'https://open.spotify.com/playlist/37i9dQZF1EFxX6RHpDdFFC?si=aeb846d4c0854fbc',
    imageURL:
      'https://storage.googleapis.com/champagne-media/Tommy%20Brown%20Playlist.jpeg',
    bigProfileImageURL:
      'https://storage.googleapis.com/champagne-media/Tommy%20Brown%20Big%20Profile.png',
  },
  {
    title: '#CTMG',
    link: 'https://open.spotify.com/playlist/37i9dQZF1EFSccWqmcyZUg?si=294a113f91ab4530',
    imageURL:
      'https://storage.googleapis.com/champagne-media/CTMG%20Playlist%20Cover%202.png',
  },
  {
    title: 'Mr. Franks',
    link: 'https://open.spotify.com/playlist/37i9dQZF1EFSccWqmcyZUg?si=294a113f91ab4530',
    imageURL:
      'https://storage.googleapis.com/champagne-media/Mr.%20Franks%20Playlist.jpeg',
  },
];

export const ROSTER_LIST: RosterMember[] = [ROSTER_MEMBERS.TOMMY_BROWN];

export const NEWS_ALERTS: NewRelease[] = [
  {
    artworkURL:
      'https://i.scdn.co/image/ab67616d0000b2731ac10fa053459ec474114974',
    title: 'RHS',
    description: getNewReleaseDescription('Amanda Rose'),
    buttonText: 'Check it out',
    redirectURL: 'https://open.spotify.com/track/7GyX0eWAKhW3MJyJhUIqcP',
  },
  {
    artworkURL:
      'https://i.scdn.co/image/ab67616d00001e02d8d1889ff7ff9491fb330d0a',
    title: 'Monster Truck',
    description: getNewReleaseDescription('Gabi Sklar'),
    buttonText: 'Check it out',
    redirectURL: 'https://open.spotify.com/track/7xbES0Q8dhPCTyjXOgThXf',
  },
];

export const EMAIL_CLIP_ART_URL =
  'https://storage.googleapis.com/champagne-media/EMAIL_CLIP_ART.png';
