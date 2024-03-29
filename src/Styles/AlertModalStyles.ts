import { css } from '@emotion/css';
import { Colors } from './variables';

export const AlertModalModalStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute' as 'absolute',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '2em 1em',
  width: '395px',
  height: 'min(60vh, 634px)',
  background: Colors.CHAMPAGNE_GOLD,
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

export const modalTitleClassname = css({
  position: 'absolute' as 'absolute',
  top: '-10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: Colors.WHITE,
  letterSpacing: '0.17em',
  width: '100%',
  textAlign: 'center',
  textTransform: 'uppercase',
});
