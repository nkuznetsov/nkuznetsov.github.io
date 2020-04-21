import { createUseStyles } from 'react-jss';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  '@global': {
    html: {
      margin: '0',
      padding: '0'
    },
    body: {
      margin: '0',
      padding: '0',
      overflow: 'hidden',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: '20px'
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    }
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
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
    height: '100%'
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
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: '15%'
  },
  rightContainer: {
    background: theme.isDebug ? colors.pink[300] : colors.transparent
  },
  rightSubContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));
