import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import TextField from '../Components/TextField';
import ImageGallery from '../Components/ImageGallery';
import '../Styles/Roster.scss';
import { writers } from '../Constants/writerMetadata';
import { Link } from 'react-router-dom';
import { ROSTER_LIST } from '../Constants/media';
import { PageHeader } from '../Components/Headers/PageHeader';

export default function Roster() {
  const [searchedWriter, setSearchedWriter] = useState('');

  const searchWriters = (currentSearch: string) => {
    setSearchedWriter(currentSearch);
  };

  const doesWriterMatchSearchName = (writer: string) => {
    return writer.toLowerCase().includes(searchedWriter.toLowerCase());
  };

  const filteredWriters = Object.keys(writers).filter((writer) =>
    doesWriterMatchSearchName(writer)
  );

  return (
    <div className="Roster">
      <PageHeader text={'Our Roster'} letterSpacing />
      <TextField
        value={searchedWriter}
        placeholder={'Search our songwriters'}
        onChange={searchWriters}
      />
      {searchedWriter === '' ? (
        <ImageGallery rosterList={ROSTER_LIST} isRounded hasAGap />
      ) : (
        <SearchedList filteredWriters={filteredWriters} />
      )}
    </div>
  );
}

const SearchedList = ({ filteredWriters }: { filteredWriters: string[] }) => {
  return (
    <ul className="SearchedList">
      {filteredWriters.map((writer) => (
        <Link
          to={`/profile/${writer}`}
          state={{ writer: writer }}
          style={{ textDecoration: 'none' }}
        >
          <li>
            {writer}
            <div className="slidingUnderline"></div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
