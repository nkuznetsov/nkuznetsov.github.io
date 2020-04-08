import { createUseStyles } from 'react-jss';

const lobsterHeight = '20rem';
const lobsterPadding = '2rem';
const lobsterTransition = '1s';

export default createUseStyles(theme => ({
  lobsterClockwise: {
    height: lobsterHeight,
    padding: lobsterPadding,
    transition: lobsterTransition,
    background: theme.base.secondary,
    borderRadius: '2rem',
    animation: '$rotateClockwise 30s infinite'
  },
  lobsterCounterclockwise: {
    height: lobsterHeight,
    padding: lobsterPadding,
    transition: lobsterTransition,
    background: theme.base.secondaryVariant,
    borderRadius: '45%',
    animation: '$rotateCounterClockwise 30s infinite'
  },
  '@keyframes rotateClockwise': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  '@keyframes rotateCounterClockwise': {
    '0%': { transform: 'rotate(360deg)' },
    '100%': { transform: 'rotate(0deg)' }
  }
}));
