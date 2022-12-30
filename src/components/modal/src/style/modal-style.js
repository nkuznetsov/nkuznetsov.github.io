import { BREAKPOINTS } from 'utils/constants';
import { colors } from 'style/colors';
import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  closeIcon: {
    backgroundColor: theme.isDebug && colors.yellow[100],
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '5rem',
      height: '5rem',
      padding: '0.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      width: '10rem',
      height: '10rem',
      padding: '1rem'
    }
  }
}));
