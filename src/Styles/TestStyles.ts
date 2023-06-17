import { css } from '@emotion/css';
import { Text } from './variables';

export const selectionPaneClassname = css({
  textAlign: 'left',
  margin: '40px',
  h2: {
    ...Text.header,
    ...{
      textTransform: 'none',
      fontSize: '2em',
      letterSpacing: '0',
      margin: '0',
    },
  },
  ul: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '0',
    margin: '0',
  },
});

export const memberCardListClassname = css({
  display: 'flex',
  flexDirection: 'column',
});

export const memberCardClassname = css({
  //   border: '2px solid green',
  width: '42vw',
  justifyContent: 'space-between',
  alignSelf: 'stretch',
  img: {
    width: '10%',
    borderRadius: '100%',
  },
  p: { ...Text.paragraph, ...{ marginBlock: '0', fontWeight: 'bold' } },
  display: 'flex',
  alignItems: 'center',
  section: {
    // border: '2px solid red',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
  },
});

export const editSelectionPaneClassname = css({
  h2: {
    ...Text.header,
    ...{
      textTransform: 'none',
      fontSize: '2em',
      letterSpacing: '0',
      margin: '0',
    },
  },
});
