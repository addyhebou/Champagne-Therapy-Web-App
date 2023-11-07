import { Button } from '@mui/material';
import React from 'react';
import { dropdownButtonStyles } from '../../Styles/DropdownButtonStyles';

interface Props {
  handleClick: () => void;
  text: string;
  selected: boolean;
}

export const RoundedButton = ({ handleClick, text }: Props) => {
  return (
    <Button sx={Object.assign({}, dropdownButtonStyles)} onClick={handleClick}>
      <p style={{ margin: '0' }}>{text}</p>
    </Button>
  );
};
