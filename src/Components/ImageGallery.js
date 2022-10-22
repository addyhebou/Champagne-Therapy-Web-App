import { Reac, useState } from 'react';
import '../Styles/ImageGallery.scss';
import GroupGallery from './GroupGallery';

export default function ImageGallery({ rosterList, rounded, gap }) {
  const groups = [];
  let group = [];

  const triggerGreyscale = (i) => {
    groups.forEach((group) => {
      group.forEach((img) => {
        const keyArray = img.key.split('-');
        const key = parseInt(keyArray[keyArray.length - 1]);
        if (key !== i) img = changeClassToGreyscale(img);
      });
    });
  };

  const changeClassToGreyscale = (img) => {
    return (
      <img
        className={`${rounded && 'roundedImg'} ${
          gap && 'gapBetweenImg'
        } greyOn`}
        key={img.key}
        src={img.src}
        alt={img.alt}
        onMouseEnter={img.onMouseEnter}
      />
    );
  };
  const [toggleStyle, setToggleStyle] = useState('');

  const toggleGreyscale = (i) => {
    groups.forEach((group) => {
      group.forEach((img) => {
        const keyArray = img.key.split('-');
        const key = parseInt(keyArray[keyArray.length - 1]);
        if (key !== i) setToggleStyle('grayscale(0)');
      });
    });
    setToggleStyle('grayscale(1)');
  };

  rosterList.forEach((member, i) => {
    if (i > 0 && i % 3 === 0) {
      groups.push(group);
      group = [];
    }
    group.push(
      <img
        className={`${rounded && 'roundedImg'} ${gap && 'gapBetweenImg'} `}
        key={`${member.name}-${i}`}
        src={member.imageURL}
        alt={`${member.name}`}
      />
    );
  });
  if (group.length > 0 && group.length < 4) groups.push(group);

  return (
    <div className="ImageGallery">
      {groups.map((group, i) => {
        const orientation = i % 2 === 0 ? 'topDownRows' : 'bottomUpRows';
        return <GroupGallery id={i} images={group} orientation={orientation} />;
      })}
    </div>
  );
}
