import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  dynamicGallery: {
    background: theme.isDebug ? colors.red[200] : colors.transparent,

    /* Prevent vertical gaps */
    lineHeight: 0,

    '-webkit-column-count': 3,
    '-webkit-column-gap': 0,
    '-moz-column-count': 3,
    '-moz-column-gap': 0,
    columnCount: 3,
    columnGap: 0,

    marginBottom: '0.8rem'
  },
  // Fixed 8x8 gallery, which contains 7 images
  fixedGallery: {
    display: 'grid',
    // 8x8 grid, even rows and columns
    gridTemplateColumns: 'repeat(8, 12.5%)',
    gridTemplateRows: 'repeat(8, 12.5%)',
    gridGap: '0.5rem',

    // Make sure grid height does not overflow
    maxHeight: 'calc(100% - 4.5rem)'
  }
}));
