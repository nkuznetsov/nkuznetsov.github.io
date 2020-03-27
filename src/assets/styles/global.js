import { createUseStyles } from 'react-jss';

const globalStyles = createUseStyles(theme => ({
  app: {
    backgroundColor: theme.background,
    textAlign: 'center',
    fontSize: '20px',
    height: '100%',
    margin: '0',
    padding: '0',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  }
}));

export { globalStyles };
