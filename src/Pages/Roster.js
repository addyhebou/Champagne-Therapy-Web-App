import React from 'react';
import Navbar from '../Components/Navbar';
import TextField from '../Components/TextField';
import ImageGallery from '../Components/ImageGallery';
import '../Styles/Roster.scss';

export default function Roster() {
  const rosterList = [
    {
      name: 'Tommy Brown',
      imageURL:
        'https://storage.googleapis.com/champagne-media/Tommy%20Brown%20Profile%202.png',
    },
    {
      name: 'Melanie Joy Fontana',
      imageURL:
        'https://storage.googleapis.com/champagne-media/Melanie%20Joy%20Fontana%20Profile.png',
    },
    {
      name: 'Travis Sayles',
      imageURL:
        'https://storage.googleapis.com/champagne-media/Travis%20Sayles%20Profile%20Pic.png',
    },
    {
      name: 'Mr. Franks',
      imageURL:
        'https://storage.googleapis.com/champagne-media/Mr.%20Franks%20Profile.png',
    },
    {
      name: '3-60',
      imageURL:
        'https://storage.googleapis.com/champagne-media/360%20Profile%20Pic.png',
    },
    {
      name: 'Saint Steph',
      imageURL:
        'https://storage.googleapis.com/champagne-media/Saint%20Steph%20Profile.png',
    },
  ];
  return (
    <div className="Roster">
      <Navbar />
      <h1>OUR ROSTER</h1>
      <TextField placeholder={'Search our songwriters'} />
      <ImageGallery rosterList={rosterList} rounded gap />
    </div>
  );
}
