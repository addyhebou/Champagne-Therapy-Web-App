import { css } from '@emotion/css';
import { Colors } from './variables';

export const albumArtworkPaneItemClassname = css({
  border: '2px solid white',
  '&:hover': {
    borderColor: Colors.CHAMPAGNE_GOLD,
    cursor: 'pointer',
  },
});

export const albumArtworkPaneClassname = css({
  width: '85vw',
  marginBlockStart: '2em',
});
