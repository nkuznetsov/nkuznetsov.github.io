import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  lobster: {
    height: '25rem',
    pointerEvents: 'none',
    animationName: '$rotate',
    animationDuration: '20s',
    animationIterationCount: 'infinite'
  },
  '@keyframes rotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  themeIcon: {
    width: '2em',
    height: '2em'
  },
  themeController: {
    padding: '2em'
  },
  name: {
    fontSize: '2em'
  }
}));
