import React from 'react';
import { pageHeaderClassname } from '../../Styles/PageHeaderStyles';

interface Props {
  text: string;
  letterSpacing?: boolean;
}

export const PageHeader = ({ text, letterSpacing }: Props) => {
  return <h1 className={pageHeaderClassname(letterSpacing)}>{text}</h1>;
};
