import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  socialIconsContainer: {
    background: theme.isDebug ? colors.purple[100] : colors.transparent,
    display: 'flex',
    justifyContent: 'center'
  },
  socialIcon: {
    width: '3rem',
    height: '3rem',
    padding: '1rem',
    margin: '1rem'
  }
}));
