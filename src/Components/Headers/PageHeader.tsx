import React from 'react';
import { pageHeaderClassname } from '../../Styles/PageHeaderStyles';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../Styles/variables';

interface Props {
  text: string;
  letterSpacing?: boolean;
  uppercase?: boolean;
}

export const PageHeader = ({ text, letterSpacing, uppercase }: Props) => {
  return (
    <h1 className={pageHeaderClassname(letterSpacing, uppercase)}>{text}</h1>
  );
};
