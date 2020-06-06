import { BREAKPOINTS } from 'utils/constants';
import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  home: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    color: theme.onBackground,
    background: theme.background,
    textAlign: 'center',
    animationName: '$fadein',
    animationDuration: '2s'
  },
  '@keyframes fadein': {
    from: { opacity: '0.6' },
    to: { opacity: '1' }
  },
  container: {
    background: theme.isDebug && colors.brown,
    padding: 0
  },
  leftContainer: {
    background: theme.isDebug && colors.pink[100],
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingTop: '3%'
  },
  centerContainer: {
    background: theme.isDebug && colors.pink[200],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  centerSubContainer: {
    background: theme.isDebug && colors.teal[100],
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      paddingTop: 0
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      paddingTop: '50%'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {
      paddingTop: '40%'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xmd}px)`]: {
      paddingTop: '30%'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.md}px)`]: {
      paddingTop: '20%'
    }
  },
  placeholder: {
    height: '3rem'
  },
  rightContainer: {
    background: theme.isDebug && colors.pink[300],
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignContent: 'flex-end'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.md}px)`]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignContent: 'flex-start'
    }
  },
  experienceIcon: {
    background: theme.isDebug && colors.pink[100],
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '3rem',
      height: '3rem',
      padding: '0.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      width: '5rem',
      height: '5rem',
      padding: '1rem'
    }
  },
  topMenu: {
    background: theme.isDebug && colors.pink[100],
    display: 'flex',
    justifyContent: 'flex-end'
  },
  linksContainer: {
    background: theme.isDebug && colors.teal[300],
    display: 'flex',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      flexDirection: 'row'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xsm}px)`]: {
      flexDirection: 'column'
    }
  }
}));
