import { React, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import TextField from '../Components/TextField';
import ImageGallery from '../Components/ImageGallery';
import '../Styles/Roster.scss';
import { writers } from '../Constants/writerMetadata.ts';
import { Link } from 'react-router-dom';

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
  const [searchedWriter, setSearchedWriter] = useState('');

  useEffect(() => {
    console.log(searchedWriter);
  }, [searchedWriter]);

  const searchWriters = (currentSearch) => {
    setSearchedWriter(currentSearch);
  };

  const doesWriterMatchSearchName = (writer) => {
    return writer.toLowerCase().includes(searchedWriter.toLowerCase());
  };

  const filteredWriters = Object.keys(writers).filter((writer) =>
    doesWriterMatchSearchName(writer)
  );

  return (
    <div className="Roster">
      <Navbar />
      <h1>OUR ROSTER</h1>
      <TextField
        value={searchedWriter}
        placeholder={'Search our songwriters'}
        onChange={searchWriters}
      />
      {searchedWriter === '' ? (
        <ImageGallery rosterList={rosterList} rounded gap />
      ) : (
        <SearchedList filteredWriters={filteredWriters} />
      )}
    </div>
  );
}

const SearchedList = ({ filteredWriters }) => {
  return (
    <ul className="SearchedList">
      {filteredWriters.map((writer) => (
        <Link to={`/profile/${writer}`} style={{ textDecoration: 'none' }}>
          <li>{writer}</li>
        </Link>
      ))}
    </ul>
  );
};
