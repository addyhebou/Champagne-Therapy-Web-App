import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/GroupGallery.scss';
import { ORIENTATIONS } from '../Constants/constants';

interface Props {
  images: React.ReactNode[];
  orientation: 'topDownRows' | 'bottomUpRows';
  id: number;
}

export default function GroupGallery({ images, orientation, id }: Props) {
  return (
    <div key={`group-${id}`} className={`GroupGallery ${orientation} `}>
      {images.map((img, i) => {
        const gridAreaStyle = i === 0 ? 'header' : `cell-${i}`;
        return (
          <div className={`${gridAreaStyle} imgDiv`}>
            <Link
              to={`/profile/${img.props.alt}`}
              state={{ writer: img.props.alt }}
            >
              <caption>{img.props.alt}</caption>
              {img}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
