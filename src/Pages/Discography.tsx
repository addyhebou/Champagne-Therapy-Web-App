import React, { useState } from 'react';
import { PageHeader } from '../Components/Headers/PageHeader';
import TextField from '../Components/TextField';
import { discographyClassname } from '../Styles/DiscographyStyles';
import { AlbumArtworkPane } from '../Components/AlbumArtworkPane';
import { SortAndFilterPane } from '../Components/SortAndFilterPane';

export const Discography = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <div className={discographyClassname}>
      <PageHeader text={'Discography'} />
      <TextField
        value={search}
        placeholder={'Search artists, songs, albums, songwriters, or producers'}
        size={'long'}
        onChange={setSearch}
      />
      <SortAndFilterPane />
      <AlbumArtworkPane searchTerm={search} />
    </div>
  );
};
