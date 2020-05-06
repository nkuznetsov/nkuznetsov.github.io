import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  mainImage: {
    background: theme.isDebug ? colors.pink[300] : colors.transparent,
    width: '15rem',
    height: '15rem',
    animation: '$popout 2s ease alternate infinite'
  },
  '@keyframes popout': {
    '90%': {
      transform: 'scale(1.0)'
    },
    '100%': {
      transform: 'scale(1.2)'
    }
  }
}));
