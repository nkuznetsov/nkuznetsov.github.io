import { createUseStyles } from 'react-jss';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  home: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    color: theme.onBackground,
    background: theme.background,
    textAlign: 'center',
    animationName: '$fadein',
    animationDuration: '2s'
  },
  '@keyframes fadein': {
    from: { opacity: '0.6' },
    to: { opacity: '1' }
  },
  container: {
    background: theme.isDebug ? colors.brown : colors.transparent,
    padding: 0
  },
  leftContainer: {
    background: theme.isDebug ? colors.pink[100] : colors.transparent,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingTop: '3%'
  },
  centerContainer: {
    background: theme.isDebug ? colors.pink[200] : colors.transparent,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  centerSubContainer: {
    background: theme.isDebug ? colors.teal[100] : colors.transparent,
    paddingTop: '15%'
  },
  rightContainer: {
    background: theme.isDebug ? colors.pink[300] : colors.transparent,
    justifyContent: 'flex-end'
  },
  portfolioIcon: {
    background: theme.isDebug ? colors.pink[100] : colors.transparent,
    width: '5rem',
    height: '5rem',
    padding: '1rem'
  }
}));
