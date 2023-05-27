import React, { useState } from 'react';
import { PageHeader } from '../Components/Headers/PageHeader';
import TextField from '../Components/TextField';
import { discographyClassname } from '../Styles/DiscographyStyles';
import { AlbumArtworkPane } from '../Components/AlbumArtworkPane';
import { SortAndFilterPane } from '../Components/SortAndFilterPane';
import { FilterMap } from '../Constants/discography';

export const Discography = () => {
  const [search, setSearch] = useState<string>('');
  const [filters, setFilters] = useState<FilterMap>({
    album: [],
    artist: [],
    genre: [],
    producers: [],
    writers: [],
  });

  return (
    <div className={discographyClassname}>
      <PageHeader text={'Discography'} />
      <TextField
        value={search}
        placeholder={'Search artists, songs, albums, songwriters, or producers'}
        size={'long'}
        onChange={setSearch}
      />
      <SortAndFilterPane filters={filters} setFilters={setFilters} />
      <AlbumArtworkPane searchTerm={search} filters={filters} />
    </div>
  );
};
