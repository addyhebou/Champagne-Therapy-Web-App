import { css } from '@emotion/css';
import { Colors, Text } from './variables';

export const dropdownButtonStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '2.5px 20px',
  gap: '10px',
  background: Colors.BLACK,
  border: `2px solid ${Colors.CHAMPAGNE_GOLD}`,
  borderRadius: '32px',
  p: Text.buttonText,
  marginBlock: '10px',
  '&:hover': {
    background: Colors.BLACK,
    color: Colors.CHAMPAGNE_GOLD,
  },
};

export const popoverOverrides = css({
  '> .css-3bmhjh-MuiPaper-root-MuiPopover-paper': {
    background: 'none',
    boxShadow: 'none',
  },
});

export const checkboxMenuClassname = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '14px 13px',
  gap: '24px',
  background: Colors.BLACK,
  borderRadius: '12px',
  color: Colors.WHITE,
});
