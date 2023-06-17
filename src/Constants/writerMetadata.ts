import { ROLES, RosterMember } from './types';

const PLAYLISTS = [
  {
    title: 'Tommy Brown',
    link: 'https://open.spotify.com/playlist/37i9dQZF1EFxX6RHpDdFFC?si=aeb846d4c0854fbc',
    imageURL:
      'https://champagne-therapy-music.sfo3.cdn.digitaloceanspaces.com/Tommy%20Brown%20Profile.png',
    bigProfileImageURL:
      'https://champagne-therapy-music.sfo3.cdn.digitaloceanspaces.com/Tommy%20Brown%20Big%20Profile.png',
  },
  {
    title: '#CTMG',
    link: 'https://open.spotify.com/playlist/37i9dQZF1EFSccWqmcyZUg?si=294a113f91ab4530',
    imageURL:
      'https://champagne-therapy-music.sfo3.cdn.digitaloceanspaces.com/CTMG%20Playlist%20Cover%202.png',
  },
  {
    title: 'Mr. Franks',
    link: 'https://open.spotify.com/playlist/37i9dQZF1EFSccWqmcyZUg?si=294a113f91ab4530',
    imageURL:
      'https://champagne-therapy-music.sfo3.cdn.digitaloceanspaces.com/Mr.%20Franks%20Playlist.jpeg',
  },
];

export const ROSTER_MEMBERS: Record<string, RosterMember> = {
  TOMMY_BROWN: {
    name: 'Tommy Brown',
    imageURL: PLAYLISTS[0].imageURL,
    biography: `Thomas Lee Brown (born May 1, 1986), also known as TBHits, is an American record producer, songwriter and rapper. Brown currently lives in LA and was born and raised in Pittsburgh, Pennsylvania. He is an ASCAP award winner and a Grammy nominee. He has scored multiple chart topping albums while working with Ariana Grande on all six of her studio albums. Brown has also collected production credits for three songs on Grammy-award-winning artist Meghan Trainor's second album, Thank You.`,
    bigImageURL: PLAYLISTS[0].bigProfileImageURL || '',
    socials: {
      'Tik Tok': '',
      Spotify:
        'https://open.spotify.com/playlist/37i9dQZF1EFxX6RHpDdFFC?si=aeb846d4c0854fbc&nd=1',
      'Apple Music':
        'https://music.apple.com/us/playlist/tommy-brown-songbook/pl.741b297215834136aa0a6ce724101769',
      YouTube: '',
    },
    roles: [ROLES.PRODUCER],
  },
  MR_FRANKS: {
    name: 'Mr. Franks',
    imageURL: PLAYLISTS[2].imageURL,
    biography: `Thomas Lee Brown (born May 1, 1986), also known as TBHits, is an American record producer, songwriter and rapper. Brown currently lives in LA and was born and raised in Pittsburgh, Pennsylvania. He is an ASCAP award winner and a Grammy nominee. He has scored multiple chart topping albums while working with Ariana Grande on all six of her studio albums. Brown has also collected production credits for three songs on Grammy-award-winning artist Meghan Trainor's second album, Thank You.`,
    bigImageURL: PLAYLISTS[2].bigProfileImageURL || '',
    socials: {
      'Tik Tok': '',
      Spotify:
        'https://open.spotify.com/playlist/37i9dQZF1EFxX6RHpDdFFC?si=aeb846d4c0854fbc&nd=1',
      'Apple Music':
        'https://music.apple.com/us/playlist/tommy-brown-songbook/pl.741b297215834136aa0a6ce724101769',
      YouTube: '',
    },
    roles: [ROLES.PRODUCER],
  },
  PETER_LEE_JOHNSON: {
    name: 'Peter Lee Johnson',
    imageURL: 'www.dummy.com',
    biography: "I'm a goat",
    bigImageURL: 'www.bigDummy.com',
    socials: {
      'Tik Tok': '',
      Spotify:
        'https://open.spotify.com/playlist/37i9dQZF1EFxX6RHpDdFFC?si=aeb846d4c0854fbc&nd=1',
      'Apple Music':
        'https://music.apple.com/us/playlist/tommy-brown-songbook/pl.741b297215834136aa0a6ce724101769',
      YouTube: '',
    },
    roles: [ROLES.PRODUCER],
  },
  MELANIE_JOY_FONTANA: {
    name: 'Melanie Joy Fontana',
    imageURL: 'www.dummy.com',
    biography: "I'm a goat",
    bigImageURL: 'www.bigDummy.com',
    socials: {
      'Tik Tok': '',
      Spotify:
        'https://open.spotify.com/playlist/37i9dQZF1EFxX6RHpDdFFC?si=aeb846d4c0854fbc&nd=1',
      'Apple Music':
        'https://music.apple.com/us/playlist/tommy-brown-songbook/pl.741b297215834136aa0a6ce724101769',
      YouTube: '',
    },
    roles: [ROLES.WRITER],
  },
  BASS_CHARITY: {
    name: 'Bass Charity',
    imageURL: 'www.dummy.com',
    biography: "I'm a goat",
    bigImageURL: 'www.bigDummy.com',
    socials: {
      'Tik Tok': '',
      Spotify:
        'https://open.spotify.com/playlist/37i9dQZF1EFxX6RHpDdFFC?si=aeb846d4c0854fbc&nd=1',
      'Apple Music':
        'https://music.apple.com/us/playlist/tommy-brown-songbook/pl.741b297215834136aa0a6ce724101769',
      YouTube: '',
    },
    roles: [ROLES.PRODUCER],
  },
};
