import { css } from '@emotion/css';
import { Colors, Text } from './variables';

export const sortAndFilterPaneClassname = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  flexDirection: 'row',
  marginBlockStart: '2em',
});

export const clearFilterBtn = css({
  ...Text.paragraph,
  ...{
    background: 'none',
    border: 'none',
    '&:hover': {
      color: Colors.CHAMPAGNE_GOLD,
      cursor: 'pointer',
    },
  },
});
