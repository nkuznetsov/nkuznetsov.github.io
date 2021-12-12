import { BREAKPOINTS } from 'utils/constants';
import { createUseStyles } from 'react-jss';
import { colors } from 'style/colors';

export default createUseStyles(theme => ({
  experience: {
    background: theme.isDebug ? colors.teal[200] : theme.background,
    color: theme.onBackground,
    minHeight: '100vh',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  main: {
    background: theme.isDebug && colors.purple[300],
    display: 'flex',
    flex: 'auto',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  experiencesContainer: {
    background: theme.isDebug && colors.brown,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      flexDirection: 'column'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      flexDirection: 'row'
    }
  },
  toTopContainer: {
    background: theme.isDebug && colors.pink[200],
    display: 'flex',
    justifyContent: 'flex-end'
  },
  toTopNavIcon: {
    background: theme.isDebug && colors.teal[100],
    width: '3rem',
    height: '3rem',
    padding: '1rem'
  }
}));
