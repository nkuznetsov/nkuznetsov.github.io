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
    // background: 'teal',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: '15%'
  },
  rightContainer: {
    // background: 'cyan',
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-start'
  },
  fluffyText: {
    fontSize: '2rem',
    marginRight: '0.3rem',
    color: colors.pink[300],
    animation: '$hideshow 10s ease infinite',
    opacity: 0
  },
  oysterText: {
    fontSize: '2rem',
    marginRight: '0.3rem',
    color: colors.pink[200],
    animation: '$hideshow 10s 1.5s ease infinite',
    opacity: 0
  },
  playgroundText: {
    fontSize: '2rem',
    color: colors.pink[100],
    animation: '$hideshow 10s 3s ease infinite',
    opacity: 0
  },
  '@keyframes hideshow': {
    '0%': { opacity: 0 },
    '15%': { opacity: 1 },
    '100%': { opacity: 0 }
  },
  name: {
    fontSize: '3rem',
    marginTop: '2rem'
  },
  mainImage: {
    // background: 'brown',
    width: '15rem',
    height: '15rem',
    animation: '$popout 5s ease alternate infinite'
  },
  '@keyframes popout': {
    '90%': {
      transform: 'scale(1.0)'
    },
    '100%': {
      transform: 'scale(1.2)'
    }
  },
  catImage: {
    transform: 'translateY(10rem)',
    animation: '$popup 10s 6.5s ease infinite',
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '10rem',
    height: '10rem'
  },
  '@keyframes popup': {
    '0%': {
      transform: 'translateY(10rem)'
    },
    '34%': {
      transform: 'translateY(2rem)'
    },
    '37%': {
      transform: 'translateY(15rem)'
    },
    '100%': {
      transform: 'translateY(15rem)'
    }
  }
}));
