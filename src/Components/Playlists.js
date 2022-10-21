import React from 'react';
import '../Styles/Playlists.scss';

export default function Playlists() {
  const playlists = [
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
  return (
    <div className="Playlists">
      {playlists.map((playlist) => (
        <a href={playlist.link} referrerpolicy="no-referrer" target="_blank">
          <img
            src={playlist.imageURL}
            alt={`${playlist.title} playlist cover`}
          />
        </a>
      ))}
    </div>
  );
}
