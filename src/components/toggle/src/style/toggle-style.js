import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  toggleContainer: {
    background: theme.isDebug ? colors.purple[100] : colors.transparent,
    height: '4rem',
    padding: '2rem'
  },
  toggleIcon: {
    width: '3rem',
    height: '3rem',
    padding: '0.5rem'
  }
}));
