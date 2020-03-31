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
    background: theme.background,
    textAlign: 'center',
    animationName: '$fadein',
    animationDuration: '2s'
  },
  '@keyframes fadein': {
    from: { opacity: '0.6' },
    to: { opacity: '1' }
  }
}));
