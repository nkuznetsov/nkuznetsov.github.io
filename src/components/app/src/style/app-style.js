import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  '@global': {
    html: {
      width: '100%',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      overflowY: 'auto',
      boxSizing: 'border-box',
      '&::-webkit-scrollbar': {
        width: 0, // Chrome
        background: colors.transparent
      }
    },
    body: {
      width: '100%',
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: '100%',
      scrollbarWidth: 'none' /* Firefox */,
      '-ms-overflow-style': 'none' /* IE 10+ */
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    '&*:before': {
      boxSizing: 'inherit'
    },
    '&*:after': {
      boxSizing: 'inherit'
    }
  }
}));
