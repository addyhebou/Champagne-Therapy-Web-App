import { css } from '@emotion/react';
import { Colors } from './variables';

export const NewsAlertButtonStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flexStart',
  padding: '18px 45px',
  gap: ' 10px',

  width: '254px',
  height: '60px',

  background: '#C0013D',
  borderRadius: '72px',

  // Font Styles
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1.125em',
  letterSpacing: '0.095em',
  textTransform: 'uppercase',
  color: Colors.WHITE,

  '&:hover': {
    background: '#C0013D',
  },
});

export const NewsAlertModalStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '2em 1em',
  width: '395px',
  height: 'min(60vh, 634px)',
  background: 'linear-gradient(180deg, #D78FA5 0%, #FF578A 100%)',
  borderRadius: '29px',
  '.contentAndFooter': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2em',
    justifyContent: 'space-between',
    '.content': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '.textContent': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0',
        gap: '5px',
        marginBlockStart: '20px',
        h1: {
          fontFamily: 'Helvetica Neue',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '2em',
          color: Colors.WHITE,
          marginBlock: '0',
        },
        p: {
          fontFamily: 'Helvetica Neue',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '1.25em',
          color: Colors.WHITE,
          textAlign: 'center',
          marginBlock: '0',
        },
      },
      img: {
        width: '80%',
      },
    },
    footer: {
      border: '2px solid green',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});
