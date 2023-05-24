import { css } from '@emotion/css';
import { Text } from './variables';
export const pageHeaderClassname = (letterSpacing?: boolean) => {
  const currStyles = Text.header;
  if (letterSpacing) {
    currStyles.letterSpacing = '0.075em';
  }
  return css(currStyles);
};
