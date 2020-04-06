import { createUseStyles } from 'react-jss';

const lobsterHeight = '20rem';
const lobsterPadding = '2rem';
const lobsterTransition = '1s';
const circleRadius = '50%';

export default createUseStyles(theme => ({
  container: {
    height: '80%'
  },
  lobsterClockwise: {
    height: `${lobsterHeight}`,
    padding: `${lobsterPadding}`,
    transition: `${lobsterTransition}`,
    borderRadius: `${circleRadius}`,
    background: theme.accent1,
    pointerEvents: 'none',
    animation: '$rotateClockwise 30s infinite'
  },
  '@keyframes rotateClockwise': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  lobsterCounterclockwise: {
    height: `${lobsterHeight}`,
    padding: `${lobsterPadding}`,
    transition: `${lobsterTransition}`,
    borderRadius: `${circleRadius}`,
    background: theme.accent2,
    animation: '$rotateCounterClockwise 30s infinite'
  },
  '@keyframes rotateCounterClockwise': {
    '0%': { transform: 'rotate(360deg)' },
    '100%': { transform: 'rotate(0deg)' }
  },
  themeIcon: {
    width: '3rem',
    height: '3rem'
  },
  themeController: {
    padding: '2rem'
  },
  name: {
    fontSize: '3rem'
  },
  socialIcon: {
    height: '3rem',
    padding: '1rem',
    '&:hover': {
      color: 'red'
    }
  }
}));
