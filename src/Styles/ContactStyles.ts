import { css } from '@emotion/css';
import { Colors } from './variables';

export const contactPageClassname = css({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '10vh 20vw',
  form: {
    textAlign: 'left',
  },
});

export const contactHeaderClassname = css({
  textAlign: 'left',
  h1: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 'min(3.5em, 10vw)',
    color: Colors.WHITE,
    marginBlock: '10px',
    textTransform: 'none',
  },
});

export const textFieldClassname = css({
  background: 'white',
  borderRadius: '5px',

  '.MuiInputLabel-shrink': {
    color: Colors.CHAMPAGNE_GOLD,
    lineHeight: '0',
    overflow: 'visible',
  },
});

export const contactFormClassname = css({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  gap: '1.5em',
  marginBlock: '2em',
});
