import { createUseStyles } from 'react-jss';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  name: {
    background: theme.isDebug ? colors.white : colors.transparent,
    fontSize: '3rem',
    marginTop: '2rem'
  }
}));
