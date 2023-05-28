import { useState } from 'react';
import TextField from '../Components/TextField';
import ImageGallery from '../Components/ImageGallery';
import '../Styles/Roster.scss';
import { WRITERS } from '../Constants/writerMetadata';
import { Link } from 'react-router-dom';
import { ROSTER_LIST } from '../Constants/media';
import { PageHeader } from '../Components/Headers/PageHeader';
import { doesWriterMatchSearchName } from '../Utils/functions';
import { Writer } from '../Constants/types';

export default function Roster() {
  const [searchedWriter, setSearchedWriter] = useState('');

  const searchWriters = (currentSearch: string) => {
    setSearchedWriter(currentSearch);
  };

  const filteredWriters = Object.values(WRITERS).filter((writer) =>
    doesWriterMatchSearchName(writer.name, searchedWriter)
  );

  return (
    <div className="Roster">
      <PageHeader text={'Our Roster'} />
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

const SearchedList = ({ filteredWriters }: { filteredWriters: Writer[] }) => {
  return (
    <ul className="SearchedList">
      {filteredWriters.map((writer) => (
        <Link
          to={`/profile/${writer.name}`}
          state={{ writer: writer.name }}
          style={{ textDecoration: 'none' }}
        >
          <li>
            {writer.name}
            <div className="slidingUnderline"></div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
