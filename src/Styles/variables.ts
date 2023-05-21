import { createTheme } from '@mui/material';

export const Colors = {
  WHITE: '#fff',
  CHAMPAGNE_GOLD: '#d79e00',
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
