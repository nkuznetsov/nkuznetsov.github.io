import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  '@global': {
    html: {
      margin: '0',
      padding: '0'
    },
    body: {
      margin: '0',
      padding: '0',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: '20px'
    }
  },
  app: {
    position: 'fixed',
    width: '100%',
    height: '100%',
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
    // background: 'pink',
    height: '100%'
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingTop: '3%'
    // background: 'brown'
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: '20%'
    // background: 'teal'
  },
  rightContainer: {
    // background: 'cyan',
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-start'
  },
  name: {
    fontSize: '3rem',
    marginTop: '2rem'
  },
  mainImage: {
    // background: 'brown',
    width: '15rem',
    height: '15rem',
    padding: 0
  }
}));
