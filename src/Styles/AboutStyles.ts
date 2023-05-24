import { css } from '@emotion/css';
import { Text } from './variables';

export const aboutDescriptionClassname = css(Text.paragraph, {
  width: 'min(90vw, 650px)',
  margin: '0 auto',
});
