import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  text: {
    color: theme.foreground
  },
  lobster: {
    height: '40vmin',
    pointerEvents: 'none',
    animationName: '$rotate',
    animationDuration: '20s',
    animationIterationCount: 'infinite'
  },
  '@keyframes rotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }
}));
