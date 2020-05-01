import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  '@global': {
    html: {
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      overflowY: 'auto',
      boxSizing: 'border-box'
    },
    '::-webkit-scrollbar': {
      width: 0, // Chrome
      background: 'transparent'
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: '20px',
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
