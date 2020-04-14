import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  socialIconsContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  socialIcon: {
    width: '3rem',
    height: '3rem',
    padding: '1rem',
    margin: '1rem'
  }
}));
