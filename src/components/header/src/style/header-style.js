import { createUseStyles } from 'react-jss';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  fluffyText: {
    background: theme.isDebug ? colors.teal[100] : colors.transparent,
    fontSize: '2rem',
    marginRight: '0.3rem',
    color: colors.pink[300],
    animation: '$hideshow 10s ease infinite',
    opacity: 0
  },
  oysterText: {
    background: theme.isDebug ? colors.teal[200] : colors.transparent,
    fontSize: '2rem',
    marginRight: '0.3rem',
    color: colors.pink[200],
    animation: '$hideshow 10s 1.5s ease infinite',
    opacity: 0
  },
  playgroundText: {
    background: theme.isDebug ? colors.teal[300] : colors.transparent,
    fontSize: '2rem',
    color: colors.pink[100],
    animation: '$hideshow 10s 3s ease infinite',
    opacity: 0
  },
  '@keyframes hideshow': {
    '0%': { opacity: 0 },
    '15%': { opacity: 1 },
    '100%': { opacity: 0 }
  }
}));
