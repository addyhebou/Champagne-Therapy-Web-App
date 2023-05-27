import { css } from '@emotion/css';
import { TextFieldSizes } from './variables';

export const textFieldSize = css({
  width: 'min(700px, 85vw)',
});

export const textSizeFieldClassname = (size?: string) => {
  if (size === TextFieldSizes.LONG) return textFieldSize;
  return css({ width: 'min(478px, 478px)' });
};
