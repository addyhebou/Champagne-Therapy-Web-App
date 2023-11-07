import { RosterMember } from '../Constants/types';
import '../Styles/ImageGallery.scss';
import GroupGallery from './GroupGallery';

interface Props {
  rosterList: RosterMember[];
  isRounded: boolean;
  hasAGap: boolean;
}

export default function ImageGallery({
  rosterList,
  isRounded,
  hasAGap,
}: Props) {
  const groups: React.ReactNode[][] = [];
  let group: React.ReactNode[] = [];

  rosterList.forEach((member, i) => {
    if (i > 0 && i % 3 === 0) {
      groups.push(group);
      group = [];
    }
    group.push(
      <img
        className={`${isRounded && 'roundedImg'} ${
          hasAGap && 'gapBetweenImg'
        } `}
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
        return (
          <GroupGallery
            id={i}
            key={i}
            images={group}
            orientation={orientation}
          />
        );
      })}
    </div>
  );
}
