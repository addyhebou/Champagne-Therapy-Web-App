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
import { Writer } from '../../Constants/types';
import { DISCOGRAPHY, Record } from '../../Constants/discography';
import { Colors } from '../../Styles/variables';

interface Props {
  text: string;
}

export const DropdownButton = ({ text }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const id = !!anchorEl ? 'simple-popover' : undefined;

  return (
    <div>
      <Button sx={dropdownButtonStyles} onClick={handleClick}>
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
        <CheckboxMenu category={getCategoryByText(text)} />
      </Popover>
    </div>
  );
};

const getCategoryByText = (text: string) => {
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

const getFilterOptions = (category: string) => [
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

const CheckboxMenu = ({ category }: { category: string }) => {
  return (
    <FormControl
      sx={{ m: 2, border: `2px solid ${Colors.GREY}`, p: '14px 13px' }}
      component="fieldset"
      className={checkboxMenuClassname}
    >
      <FormGroup>
        {getFilterOptions(category).map(
          (option) =>
            typeof option === 'string' && (
              <FormControlLabel
                control={
                  <Checkbox
                    name={option}
                    sx={{
                      color: Colors.CHAMPAGNE_GOLD,
                      '&.Mui-checked': {
                        color: Colors.CHAMPAGNE_GOLD,
                      },
                    }}
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
