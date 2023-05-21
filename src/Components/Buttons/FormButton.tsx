import { Button, ThemeProvider } from '@mui/material';
import React from 'react';
import { Colors, theme } from '../../Styles/variables';
import { formButtonClassname } from '../../Styles/FormButton';

interface Props {
  text: string;
  color: 'primary' | 'secondary';
  onClick?: () => void;
}

export const FormButton = ({ text, color = 'primary', onClick }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color={color}
        style={{
          marginBlock: '1em',
          color: Colors.WHITE,
          width: 'min(200px, 100%)',
        }}
        type="submit"
        onClick={onClick}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};
