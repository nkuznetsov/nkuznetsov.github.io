import { createUseStyles } from 'react-jss';
import { colors } from 'style/colors';

export default createUseStyles(theme => ({
  flowingTile: {
    background: theme.isDebug ? colors.red[100] : theme.background,
    width: '100%', // in case there are inline attributes
    height: 'auto'
  },
  galleryImage: {
    background: theme.isDebug ? colors.brown : theme.background,
    width: '100%',
    height: '100%',

    // This maintains aspect ratio
    objectFit: 'cover'
  },
  fixedTileCommon: {
    background: theme.isDebug ? colors.red[100] : theme.background,
    width: '100%',
    height: '100%'
  },
  fixedTile0: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 3
  },
  fixedTile1: {
    gridColumnStart: 3,
    gridColumnEnd: 5,
    gridRowStart: 1,
    gridRowEnd: 3
  },
  fixedTile2: {
    gridColumnStart: 5,
    gridColumnEnd: 9,
    gridRowStart: 1,
    gridRowEnd: 3
  },
  fixedTile3: {
    gridColumnStart: 1,
    gridColumnEnd: 4,
    gridRowStart: 3,
    gridRowEnd: 6
  },
  fixedTile4: {
    gridColumnStart: 4,
    gridColumnEnd: 9,
    gridRowStart: 3,
    gridRowEnd: 6
  },
  fixedTile5: {
    gridColumnStart: 1,
    gridColumnEnd: 5,
    gridRowStart: 6,
    gridRowEnd: 9
  },
  fixedTile6: {
    gridColumnStart: 5,
    gridColumnEnd: 9,
    gridRowStart: 6,
    gridRowEnd: 9
  }
}));
