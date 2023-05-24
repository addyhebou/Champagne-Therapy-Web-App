import { css } from '@emotion/css';
import { Colors } from './variables';

export const animatedSliderButtonClassname = css({
  width: '334px',
  height: '63px',

  background:
    'linear-gradient(90deg, #d79e00 50%, rgb(217, 217, 217) 0) var(--_p, 100%) / 200% no-repeat',
  '-webkit-background-clip': 'border-box',
  backgroundClip: ' borderBox',
  transition: '0.5s',
  borderRadius: '30px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  span: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'bold',
    fontWeight: '700',
    fontSize: '22px',
    lineheight: '27px',
    texttransform: 'uppercase',
    '-webkit-background-clip': 'border-box',
    backgroundClip: 'border-box',
    transition: '0.5s',

    color:
      'linear-gradient(90deg, #9e0000 50%, rgb(88, 88, 88) 0) var(--_p, 100%) / 200% no-repeat',
  },
  'span:hover ': {
    '--_p': '0',
    color: Colors.WHITE,
  },
  '&:hover': {
    ' --_p': '0',
    cursor: 'pointer',
  },
});
