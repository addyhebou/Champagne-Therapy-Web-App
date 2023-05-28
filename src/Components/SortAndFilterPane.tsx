import React from 'react';
import { FILTERS } from '../Constants/constants';
import { DropdownButton } from './Buttons/DropdownButton';
import {
  clearFilterBtn,
  sortAndFilterPaneClassname,
} from '../Styles/SortAndFilterPaneStyles';
import { DISCOGRAPHY, FilterMap, Record } from '../Constants/discography';
import { Producer, Writer } from '../Constants/types';
import { clearObject, isObjectEmpty } from '../Utils/functions';

export const SortAndFilterPane = ({
  filters,
  setFilters,
}: {
  filters: FilterMap;
  setFilters: React.Dispatch<React.SetStateAction<FilterMap>>;
}) => {
  const getFilterOptions = (category: string): (string | Producer)[] => {
    if (category === 'album') category = 'title';
    return [
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
  };

  const getCategoryByText = <T extends keyof FilterMap>(text: string): T => {
    switch (text) {
      case 'produced by':
        return 'producers' as T;
      case 'written by':
        return 'writers' as T;
      default:
        return text as T;
    }
  };

  return (
    <div>
      <div className={sortAndFilterPaneClassname}>
        {FILTERS.map((filter) => (
          <DropdownButton
            text={filter}
            options={getFilterOptions(getCategoryByText(filter))}
            filters={filters}
            setFilters={setFilters}
            category={getCategoryByText(filter)}
          />
        ))}
      </div>
      {!isObjectEmpty(filters) && (
        <button
          className={clearFilterBtn}
          onClick={() => setFilters(clearObject(filters))}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};
