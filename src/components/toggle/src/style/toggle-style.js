import { BREAKPOINTS } from 'utils/constants';
import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  toggleContainer: {
    background: theme.isDebug && colors.purple[100],
    height: '4rem',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      padding: '0.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xmd}px)`]: {
      padding: '1rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.lg}px)`]: {
      padding: '1.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xl}px)`]: {
      padding: '2rem'
    }
  },
  toggleIcon: {
    padding: '0.5rem',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '2rem',
      height: '2rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      width: '2.5rem',
      height: '2.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xmd}px)`]: {
      width: '3rem',
      height: '3rem'
    }
  }
}));
