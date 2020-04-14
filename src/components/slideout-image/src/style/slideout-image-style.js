import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  catImage: {
    transform: 'translateY(10rem)',
    animation: '$popup 10s 6.5s ease infinite',
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '10rem',
    height: '10rem'
  },
  '@keyframes popup': {
    '0%': {
      transform: 'translateY(10rem)'
    },
    '34%': {
      transform: 'translateY(2rem)'
    },
    '37%': {
      transform: 'translateY(15rem)'
    },
    '100%': {
      transform: 'translateY(15rem)'
    }
  }
}));
