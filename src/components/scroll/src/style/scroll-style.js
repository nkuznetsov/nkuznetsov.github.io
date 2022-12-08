import { BREAKPOINTS } from 'utils/constants';
import { colors } from 'style/colors';
import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  nextPageNavIcon: {
    background: theme.isDebug && colors.pink[100],
    width: '3rem',
    height: '3rem',
    padding: '1rem',
    margin: '0 auto',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      display: 'flex'
    }
  },
  toTopNavIcon: {
    background: theme.isDebug && colors.pink[200],
    width: '3rem',
    height: '3rem',
    padding: '1rem',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      display: 'flex'
    }
  }
}));
