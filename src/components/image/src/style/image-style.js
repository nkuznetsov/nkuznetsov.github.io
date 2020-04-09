import { createUseStyles } from 'react-jss';
import { ThemeType } from '../../../../models';

export default createUseStyles(theme => ({
  themed: {
    border:
      theme.type === ThemeType.Light
        ? `1px solid ${theme.base.primaryVariants[1]}`
        : `1px solid ${theme.base.surface}`,
    borderRadius: '30%'
  }
}));
