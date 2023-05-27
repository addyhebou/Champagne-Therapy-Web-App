import { TextField, TextFieldProps, ThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from '../Styles/variables';

export const FormTextField = (props: TextFieldProps) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-basic"
        label={props.label}
        placeholder={props.placeholder}
        className={props.className}
        autoFocus={props.autoFocus}
        color={props.color ?? 'primary'}
        style={props.style}
        multiline={props.multiline}
        minRows={props.minRows}
      />
    </ThemeProvider>
  );
};
