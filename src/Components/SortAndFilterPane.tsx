import React from 'react';
import { FILTERS } from '../Constants/constants';
import { DropdownButton } from './Buttons/DropdownButton';
import { sortAndFilterPaneClassname } from '../Styles/SortAndFilterPaneStyles';

export const SortAndFilterPane = () => {
  return (
    <div className={sortAndFilterPaneClassname}>
      {FILTERS.map((filter) => (
        <DropdownButton text={filter} />
      ))}
    </div>
  );
};
