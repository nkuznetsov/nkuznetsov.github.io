import { createUseStyles } from 'react-jss';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  portfolio: {
    background: theme.isDebug ? colors.teal[200] : theme.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    color: theme.onBackground,
    textAlign: 'center'
  },
  toTopNavIcon: {
    background: theme.isDebug ? colors.teal[100] : colors.transparent,
    width: '3rem',
    height: '3rem',
    padding: '1rem'
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  toTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center'
  }
}));
