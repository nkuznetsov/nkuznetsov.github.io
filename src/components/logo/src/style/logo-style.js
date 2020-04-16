import { createUseStyles } from 'react-jss';
import colors from '../../../../style/colors';

const logoWidth = '10rem';
const logoHeight = '10rem';
const logoPadding = '2rem';
const logoTransition = '1s';
const borderSpreadOne = 10;
const borderSpreadTwo = 15;

export default createUseStyles(theme => ({
  logoClockwise: {
    width: logoWidth,
    height: logoHeight,
    padding: logoPadding,
    transition: logoTransition,
    background: theme.isDebug ? colors.white : theme.base.primary,
    borderRadius: '5%',
    boxShadow: [
      [0, 0, 0, borderSpreadOne, theme.base.primaryVariants[0]],
      [0, 0, 0, borderSpreadTwo, theme.base.primaryVariants[1]]
    ],
    animation: '$rotateClockwise 30s infinite'
  },
  logoCounterclockwise: {
    width: logoWidth,
    height: logoHeight,
    padding: logoPadding,
    transition: logoTransition,
    background: theme.isDebug ? colors.white : theme.base.secondary,
    borderRadius: '40%',
    boxShadow: [
      [0, 0, 0, borderSpreadOne, theme.base.secondaryVariants[0]],
      [0, 0, 0, borderSpreadTwo, theme.base.secondaryVariants[1]]
    ],
    animation: '$rotateCounterclockwise 30s infinite'
  },
  '@keyframes rotateClockwise': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  '@keyframes rotateCounterclockwise': {
    '0%': { transform: 'rotate(360deg)' },
    '100%': { transform: 'rotate(0deg)' }
  }
}));
