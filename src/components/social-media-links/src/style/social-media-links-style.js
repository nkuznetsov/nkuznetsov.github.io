import { BREAKPOINTS } from 'utils/constants';
import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  socialIconsContainer: {
    background: theme.isDebug && colors.purple[100],
    display: 'flex',
    justifyContent: 'center'
  },
  socialIcon: {
    padding: '1rem',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '2rem',
      height: '2rem',
      margin: '0.5rem',
      padding: '0.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      width: '3rem',
      height: '3rem',
      margin: '1rem'
    }
  }
}));
