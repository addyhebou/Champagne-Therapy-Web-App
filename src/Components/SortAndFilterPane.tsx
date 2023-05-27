import React from 'react';
import { FILTERS } from '../Constants/constants';
import { DropdownButton } from './Buttons/DropdownButton';
import { sortAndFilterPaneClassname } from '../Styles/SortAndFilterPaneStyles';
import { DISCOGRAPHY, Record } from '../Constants/discography';
import { Producer, Writer } from '../Constants/types';

export const SortAndFilterPane = ({
  setFilters,
}: {
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const getFilterOptions = (category: string): (string | Producer)[] => [
    ...new Set(
      DISCOGRAPHY.map((record) =>
        category !== 'producers' && category !== 'writers'
          ? record[category as keyof Record]
          : (record[category as keyof Record] as Writer[]).map(
              (writer) => writer.name
            )
      ).flat()
    ),
  ];

  const getCategoryByText = (text: string): string => {
    switch (text) {
      case 'produced by':
        return 'producers';
      case 'written by':
        return 'writers';
      case 'album':
        return 'title';
      default:
        return text;
    }
  };

  return (
    <div className={sortAndFilterPaneClassname}>
      {FILTERS.map((filter) => (
        <DropdownButton
          text={filter}
          options={getFilterOptions(getCategoryByText(filter))}
          category={getCategoryByText(filter)}
        />
      ))}
    </div>
  );
};
