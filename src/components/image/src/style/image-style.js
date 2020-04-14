import { createUseStyles } from 'react-jss';
import { ThemeType } from '../../../../models';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  themed: {
    borderRadius: '30%',
    background:
      theme.type === ThemeType.Light ? 'transparent' : colors.gray[300]
  }
}));
