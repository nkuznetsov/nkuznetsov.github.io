import { createUseStyles } from 'react-jss';
import { colors } from 'style/colors';

export default createUseStyles(theme => ({
  nextPageNavIcon: {
    background: theme.isDebug && colors.pink[100],
    width: '3rem',
    height: '3rem',
    padding: '1rem',
    margin: '0 auto'
  },
  toTopNavIcon: {
    background: theme.isDebug && colors.pink[200],
    width: '3rem',
    height: '3rem',
    padding: '1rem'
  }
}));
