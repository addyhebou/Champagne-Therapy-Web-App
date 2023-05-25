import { Button } from '@mui/material';
import React from 'react';
import { dropdownButtonStyles } from '../../Styles/DropdownButtonStyles';

interface Props {
  text: string;
}

export const DropdownButton = ({ text }: Props) => {
  return (
    <Button sx={dropdownButtonStyles}>
      <p style={{ margin: '0' }}>{text}</p>
    </Button>
  );
};
