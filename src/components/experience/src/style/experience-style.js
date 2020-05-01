import { createUseStyles } from 'react-jss';
import { scrollbarWidth } from '../../../../constants';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  experience: {
    background: theme.isDebug ? colors.teal[200] : theme.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    color: theme.onBackground
  },
  toTopNavIcon: {
    background: theme.isDebug ? colors.teal[100] : colors.transparent,
    width: '3rem',
    height: '3rem',
    padding: '1rem'
  },
  main: {
    background: theme.isDebug ? colors.pink[100] : colors.transparent,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    height: '100%',
    marginLeft: scrollbarWidth
  },
  toTopContainer: {
    background: theme.isDebug ? colors.pink[200] : colors.transparent,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  experiencesContainer: {
    background: theme.isDebug ? colors.pink[300] : colors.transparent,
    height: '50%'
  }
}));
