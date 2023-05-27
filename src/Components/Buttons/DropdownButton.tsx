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

interface Props {
  text: string;
  options: (string | Producer)[];
  category: string;
}

export const DropdownButton = ({ text, options, category }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const id = !!anchorEl ? 'simple-popover' : undefined;

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
        <CheckboxMenu />
      </Popover>
    </div>
  );
};
