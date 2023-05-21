import React from 'react';
import { PLAYLISTS } from '../Constants/media';
import '../Styles/Playlists.scss';

export default function Playlists() {
  return (
    <div className="Playlists">
      {PLAYLISTS.map((playlist, i) => (
        <a href={playlist.link} rel="noreferrer" target="_blank" key={i}>
          <img
            src={playlist.imageURL}
            alt={`${playlist.title} playlist cover`}
          />
        </a>
      ))}
    </div>
  );
}
