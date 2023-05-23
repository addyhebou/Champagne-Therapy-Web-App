import { css } from '@emotion/css';
import { Colors, Text } from './variables';
export const pageHeaderClassname = (
  letterSpacing?: boolean,
  uppercase?: boolean
) => {
  const currStyles = Text.header;
  if (letterSpacing) {
    currStyles.letterSpacing = '0.075em';
  }
  return css(currStyles);
};
