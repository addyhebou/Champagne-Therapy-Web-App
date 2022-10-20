import React from 'react';
import '../Styles/GroupGallery.scss';

export default function GroupGallery({ images, orientation, id }) {
  return (
    <div key={`group-${id}`} className={`GroupGallery ${orientation} `}>
      {images.map((img, i) => {
        const gridAreaStyle = i === 0 ? 'header' : `cell-${i}`;
        return (
          <div className={`${gridAreaStyle} imgDiv`}>
            <caption>{img.props.alt}</caption>
            {img}
          </div>
        );
      })}
    </div>
  );
}
