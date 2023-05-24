import { css } from '@emotion/css';
import { Gradients } from './Styles/variables';

export const appClassname = css({
  background: Gradients.GREY,
  textAlign: 'center',
  minHeight: '100vh',

  '*': {
    transition: 'all 0.25s ease-in-out',
  },
});
