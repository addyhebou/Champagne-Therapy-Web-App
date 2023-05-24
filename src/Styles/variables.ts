import { createTheme } from '@mui/material';

export const Colors = {
  WHITE: '#fff',
  CHAMPAGNE_GOLD: '#d79e00',
  BLACK: '#000',
};

export const Text = {
  header: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 'min(48px, 10vw)',
    lineHeight: '59px',
    letterSpacing: '0',
    color: Colors.WHITE,
    textTransform: 'uppercase' as const,
  },
  paragraph: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: 'min(1.375em, 5vw)',
    color: Colors.WHITE,
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.CHAMPAGNE_GOLD,
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export const TextFieldSizes = {
  SHORT: 'short',
  LONG: 'long',
};
