import { css } from '@emotion/css';
import { Colors, Text } from './variables';

export const blockSegmentClassname = {
  margin: '40px 0',
  display: 'flex',
  flexDirection: 'row' as const,
  padding: '0',
  gap: '11px',
  justifyContent: 'space-between',
  alignItems: '',
};

export const textContentClassname = css({
  '.trapezoid': {
    backgroundColor: Colors.BLACK,
    // TODO: Add the margin: 0 40px to h1
    h1: Text.header,
    padding: '10px',
    width: '90vw',
  },
  '.nestedContent': {
    margin: '0 60px',
    // TODO: Add the width: min(64vw, 822px) to p
    p: Text.paragraph,
  },
});

export const mediaContentClassname = css({
  position: 'relative',
  marginInlineEnd: '120px',
  img: {
    width: '80%',
  },
  video: {
    width: '62.5%',
    position: 'absolute',
    zIndex: '2',
    bottom: '-5%',
    left: '-30%',
  },
});

// TODO: Find a way to modify the flexDirection in the blockSegmentClassname funciton – TS is tripping rn
export const flexDirectionOverwrite = (orientation: 'row' | 'row-reverse') =>
  css({ flexDirection: orientation });

export const textAlignOverwrite = (orientation: 'leftAlign' | 'rightAlign') =>
  css({ textAlign: orientation === 'leftAlign' ? 'left' : 'right' });

export const borderRadiusOverwrite = (
  orientation: 'borderRadiusLeft' | 'borderRadiusRight'
) =>
  css({
    borderRadius:
      orientation === 'borderRadiusLeft' ? '0 30px 30px 0' : '30px 0 0 30px',
  });

export const alignItemsOverwrite = (orientation: 'row' | 'row-reverse') =>
  css({
    alignItems: orientation === 'row' ? 'flex-start' : 'flex-end',
  });
