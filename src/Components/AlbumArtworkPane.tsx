import { ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DISCOGRAPHY, FilterMap, Record } from '../Constants/discography';
import {
  albumArtworkPaneClassname,
  albumArtworkPaneItemClassname,
} from '../Styles/AlbumArtworkPaneStyles';
import { Producer, Writer } from '../Constants/types';
import { doesWriterMatchSearchName } from '../Utils/functions';

interface Props {
  searchTerm: string;
  filters: FilterMap;
}

export const AlbumArtworkPane = ({ searchTerm, filters }: Props) => {
  const [filteredWriters, setFilteredWriters] = useState<Record[]>([]);
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

  const isObjectEmpty = (obj: object): boolean =>
    Object.values(obj).every((value) => value.length === 0);

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

  return (
    <ImageList
      variant="quilted"
      cols={8}
      gap={20}
      className={albumArtworkPaneClassname}
    >
      {filteredWriters.map((item, i) => {
        const colRowSize = i % 3 === 0 ? 2 : 1;
        return (
          <ImageListItem
            key={i}
            cols={colRowSize}
            rows={colRowSize}
            className={albumArtworkPaneItemClassname}
          >
            <img
              {...srcset(item.img, 121, colRowSize, colRowSize)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
