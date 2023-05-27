import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Popover,
} from '@mui/material';
import React, { useState } from 'react';
import {
  checkboxMenuClassname,
  dropdownButtonStyles,
  popoverOverrides,
} from '../../Styles/DropdownButtonStyles';
import { Producer } from '../../Constants/types';
import { Colors } from '../../Styles/variables';
import { FilterMap } from '../../Constants/discography';

interface Props<T extends keyof FilterMap> {
  text: string;
  options: (string | Producer)[];
  filters: FilterMap;
  setFilters: React.Dispatch<React.SetStateAction<FilterMap>>;
  category?: T;
}

export const DropdownButton = <T extends keyof FilterMap>({
  text,
  options,
  setFilters,
  filters,
  category,
}: Props<T>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const id = !!anchorEl ? 'simple-popover' : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilters(
      e.target.checked
        ? addValueToCategory(e.target.name)
        : removeValueFromCategory(e.target.name)
    );

  const addValueToCategory = <T extends keyof FilterMap>(
    value: FilterMap[T][number]
  ): FilterMap => {
    return {
      ...filters,
      [category as keyof FilterMap]: [
        ...filters[category as keyof FilterMap],
        value,
      ],
    };
  };

  const removeValueFromCategory = <T extends keyof FilterMap>(
    value: FilterMap[T][number]
  ): FilterMap => {
    return {
      ...filters,
      [category as keyof FilterMap]: (
        filters[category as keyof FilterMap] as T[]
      ).filter((v) => v !== value),
    };
  };

  const CheckboxMenu = () => {
    return (
      <FormControl
        sx={{ m: 2, border: `2px solid ${Colors.GREY}`, p: '14px 13px' }}
        component="fieldset"
        className={checkboxMenuClassname}
      >
        <FormGroup>
          {options.map(
            (option) =>
              typeof option === 'string' && (
                <FormControlLabel
                  control={
                    <Checkbox
                      name={option}
                      checked={filters[category as keyof FilterMap].includes(
                        option
                      )}
                      sx={{
                        color: Colors.CHAMPAGNE_GOLD,
                        '&.Mui-checked': {
                          color: Colors.CHAMPAGNE_GOLD,
                        },
                      }}
                      onChange={handleChange}
                    />
                  }
                  label={option}
                />
              )
          )}
        </FormGroup>
      </FormControl>
    );
  };

  return (
    <div>
      <Button
        sx={Object.assign({}, dropdownButtonStyles, {
          backgroundColor:
            filters[category as keyof FilterMap].length > 0
              ? Colors.CHAMPAGNE_GOLD
              : Colors.BLACK,
          '&:hover': {
            backgroundColor:
              filters[category as keyof FilterMap].length > 0
                ? Colors.CHAMPAGNE_GOLD
                : Colors.BLACK,
          },
        })}
        onClick={handleClick}
      >
        <p style={{ margin: '0' }}>{text}</p>
      </Button>
      <Popover
        id={id}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        className={popoverOverrides}
      >
        <CheckboxMenu />
      </Popover>
    </div>
  );
};
