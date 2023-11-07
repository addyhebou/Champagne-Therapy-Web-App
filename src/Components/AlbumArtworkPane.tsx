import { ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DISCOGRAPHY, FilterMap, Record } from '../Constants/discography';
import {
  albumArtworkPaneClassname,
  albumArtworkPaneItemClassname,
} from '../Styles/AlbumArtworkPaneStyles';
import { ModalTypes, Producer, Writer } from '../Constants/types';
import { doesWriterMatchSearchName, isObjectEmpty } from '../Utils/functions';
import { AlertModal } from './AlertModal';

interface Props {
  searchTerm: string;
  filters: FilterMap;
}

export const AlbumArtworkPane = ({ searchTerm, filters }: Props) => {
  const [filteredWriters, setFilteredWriters] = useState<Record[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<Record>({
    title: '',
    artist: '',
    genre: '',
    producers: [],
    writers: [],
    img: '',
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const srcset = (image: string, size: number, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  };

  const doesArrayContainSearchTerm = (arr: Producer[] | Writer[]) => {
    return arr.some((writer) =>
      writer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const doesRecordMatchSearch = (record: Record) =>
    Object.values(record).some((value) =>
      typeof value === 'string'
        ? doesWriterMatchSearchName(value, searchTerm)
        : doesArrayContainSearchTerm(value)
    );

  const doesRecordMatchFilters = (record: Record) =>
    isObjectEmpty(filters) ||
    Object.keys(filters).some((category) => {
      switch (category) {
        case 'album':
          return filters[category].includes(record.title);
        case 'artist':
          return filters[category].includes(record.artist);
        case 'genre':
          return filters[category].includes(record.genre);
        case 'producers':
          return record.producers.some((producer) =>
            filters[category].includes(producer.name)
          );
        case 'writers':
          return record.writers.some((writer) =>
            filters[category].includes(writer.name)
          );
      }
    });
  const getFilteredWriters = () =>
    !!searchTerm || !isObjectEmpty(filters)
      ? DISCOGRAPHY.filter(
          (record) =>
            doesRecordMatchFilters(record) && doesRecordMatchSearch(record)
        )
      : DISCOGRAPHY;

  useEffect(() => {
    setFilteredWriters(getFilteredWriters());
  }, [filters, searchTerm]);

  const description = (
    <div>
      <p style={{ fontSize: '0.75em' }}>Artist: {selectedRecord.artist}</p>
      {selectedRecord.producers.length > 0 && (
        <p style={{ fontSize: '0.75em' }}>
          Produced by:{' '}
          {selectedRecord.producers.map((producer) => producer.name).join(', ')}
        </p>
      )}
      {selectedRecord.writers.length > 0 && (
        <p style={{ fontSize: '0.75em' }}>
          Written by:{' '}
          {selectedRecord.writers.map((writer) => writer.name).join(', ')}
        </p>
      )}
    </div>
  );

  return (
    <ImageList
      variant="quilted"
      cols={8}
      gap={20}
      className={albumArtworkPaneClassname}
    >
      {filteredWriters.map((item, i) => {
        const colRowSize =
          !!searchTerm || !isObjectEmpty(filters) || i % 3 === 0 ? 2 : 1;
        return (
          <ImageListItem
            key={i}
            cols={colRowSize}
            rows={colRowSize}
            className={albumArtworkPaneItemClassname}
            onClick={() => {
              setSelectedRecord(item);
              handleOpen();
            }}
          >
            <img
              {...srcset(item.img, 121, colRowSize, colRowSize)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
      <AlertModal
        open={open}
        handleClose={handleClose}
        title={selectedRecord.title}
        description={description}
        buttonText={'Listen here!'}
        artworkURL={selectedRecord.img}
        type={ModalTypes.RECORD}
      />
    </ImageList>
  );
};
