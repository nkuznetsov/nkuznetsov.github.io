import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  mainImage: {
    width: '15rem',
    height: '15rem',
    animation: '$popout 5s ease alternate infinite'
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
