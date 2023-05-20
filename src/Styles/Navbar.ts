import { css, SerializedStyles } from '@emotion/react';

export const navbarClassname = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '27px 10px',

  '@media only screen and (max-width: 678px)': {
    '.NavLinks': {
      display: 'none',
    },
    '.Menu': {
      color: 'white',
    },
  },

  '@media only screen and (min-width: 679px)': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '27px 10px',
    '.Menu': {
      display: 'none',
    },
  },

  '.Logo': {
    width: 'min(48vw, 300px)',
  },
});
