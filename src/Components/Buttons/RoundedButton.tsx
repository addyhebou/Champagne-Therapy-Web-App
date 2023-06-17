import { Button } from '@mui/material';
import React from 'react';
import { FilterMap } from '../../Constants/discography';
import { dropdownButtonStyles } from '../../Styles/DropdownButtonStyles';
import { Colors } from '../../Styles/variables';

interface Props {
  handleClick: () => void;
  text: string;
  selected: boolean;
}

export const RoundedButton = ({ handleClick, text, selected }: Props) => {
  return (
    <Button sx={Object.assign({}, dropdownButtonStyles)} onClick={handleClick}>
      <p style={{ margin: '0' }}>{text}</p>
    </Button>
  );
};
