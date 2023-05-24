import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { DISCOGRAPHY } from '../Constants/discography';

export const AlbumArtworkPane = () => {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <ImageList
      sx={{ width: '85vw', marginBlockStart: '2em' }}
      variant="quilted"
      cols={8}
      gap={20}
    >
      {DISCOGRAPHY.map((item, i) => {
        const colRowSize = i % 3 === 0 ? 2 : 1;
        return (
          <ImageListItem
            key={item.img}
            cols={colRowSize}
            rows={colRowSize}
            sx={{ border: '2px solid white' }}
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
