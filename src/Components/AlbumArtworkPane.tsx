import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { DISCOGRAPHY, Record } from '../Constants/discography';
import {
  albumArtworkPaneClassname,
  albumArtworkPaneItemClassname,
} from '../Styles/AlbumArtworkPaneStyles';
import { Producer, Writer } from '../Constants/types';
import { doesWriterMatchSearchName } from '../Utils/functions';

export const AlbumArtworkPane = ({ searchTerm }: { searchTerm: string }) => {
  const srcset = (image: string, size: number, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  };

  const doesArrayContainSearchTerm = (arr: Producer[] | Writer[]) => {
    console.log({ arr });
    console.log({ searchTerm });
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

  const filteredWriters = () =>
    !!searchTerm
      ? DISCOGRAPHY.filter((record) => doesRecordMatchSearch(record))
      : DISCOGRAPHY;

  return (
    <ImageList
      variant="quilted"
      cols={8}
      gap={20}
      className={albumArtworkPaneClassname}
    >
      {filteredWriters().map((item, i) => {
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
