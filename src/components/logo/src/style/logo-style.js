import { BREAKPOINTS } from 'utils/constants';
import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

const logoPadding = '2rem';
const logoTransition = '1s';
const borderSpreadOne = 10;
const borderSpreadTwo = 15;

export default createUseStyles(theme => ({
  logoClockwise: {
    padding: logoPadding,
    transition: logoTransition,
    background: theme.isDebug ? colors.white : theme.base.primary,
    borderRadius: '5%',
    boxShadow: [
      [0, 0, 0, borderSpreadOne, theme.base.primaryVariants[0]],
      [0, 0, 0, borderSpreadTwo, theme.base.primaryVariants[1]]
    ],
    animation: '$rotateClockwise 30s infinite',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '3rem',
      height: '3rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xmd}px)`]: {
      width: '5rem',
      height: '5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.md}px)`]: {
      width: '10rem',
      height: '10rem'
    }
  },
  logoCounterclockwise: {
    padding: logoPadding,
    transition: logoTransition,
    background: theme.isDebug ? colors.white : theme.base.secondary,
    borderRadius: '40%',
    boxShadow: [
      [0, 0, 0, borderSpreadOne, theme.base.secondaryVariants[0]],
      [0, 0, 0, borderSpreadTwo, theme.base.secondaryVariants[1]]
    ],
    animation: '$rotateCounterclockwise 30s infinite',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '3rem',
      height: '3rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xmd}px)`]: {
      width: '5rem',
      height: '5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.md}px)`]: {
      width: '10rem',
      height: '10rem'
    }
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
