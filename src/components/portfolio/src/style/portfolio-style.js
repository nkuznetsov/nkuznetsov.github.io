import { createUseStyles } from 'react-jss';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  portfolio: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    color: theme.onBackground,
    background: theme.background,
    textAlign: 'center'
  }
}));
