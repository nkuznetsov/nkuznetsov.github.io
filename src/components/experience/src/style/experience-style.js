import { BREAKPOINTS } from 'utils/constants';
import { createUseStyles } from 'react-jss';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  experience: {
    background: theme.isDebug ? colors.teal[200] : theme.background,
    color: theme.onBackground,
    minHeight: '100vh',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  toTopNavIcon: {
    background: theme.isDebug && colors.teal[100],
    width: '3em',
    height: '3em',
    padding: '1em'
  },
  main: {
    background: theme.isDebug && colors.purple[300],
    display: 'flex',
    flex: 'auto',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  toTopContainer: {
    background: theme.isDebug && colors.pink[200],
    display: 'flex',
    justifyContent: 'flex-end'
  },
  experiencesContainer: {
    background: theme.isDebug && colors.brown,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      flexDirection: 'column'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      flexDirection: 'row'
    }
  },
  topSection: {
    background: theme.isDebug && colors.red[100],
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxsm}px)`]: {
      flexDirection: 'row',
      height: '30%'
    }
  },
  logoSection: {
    background: theme.isDebug && colors.teal[100],
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'flex',
      width: '80%',
      height: '40%',
      paddingBottom: '1em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxsm}px)`]: {
      width: '20%',
      height: '100%'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xsm}px)`]: {
      width: '30%'
    }
  },
  titleSection: {
    background: theme.isDebug && colors.teal[300],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    paddingLeft: '0.5em',
    overflowY: 'auto',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '100%',
      alignItems: 'center'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxsm}px)`]: {
      width: '80%'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xsm}px)`]: {
      width: '70%'
    }
  },
  positionLargeFont: {
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'flex'
    }
  },
  positionSmallFont: {
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'flex'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'none'
    }
  },
  displayNameLargeFont: {
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'flex'
    }
  },
  displayNameSmallFont: {
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'flex'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'none'
    }
  },
  periodLargeFont: {
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'flex'
    }
  },
  periodSmallFont: {
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'flex'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'none'
    }
  },
  workLinkContainer: {
    background: theme.isDebug && colors.teal[300],
    display: 'flex',
    alignItems: 'center'
  },
  middleSection: {
    background: theme.isDebug && colors.red[200],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
    height: '55%',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxsm}px)`]: {
      display: 'flex'
    }
  },
  bottomSection: {
    background: theme.isDebug && colors.red[100],
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxsm}px)`]: {
      display: 'flex'
    }
  },
  experienceLogo: {
    background: theme.isDebug && colors.red[300],
    width: '100%',
    height: '100%'
  },
  experienceCardContainer: {
    background: theme.isDebug ? colors.yellow[200] : theme.secondaryBackground,
    margin: '1em',
    paddingTop: '1em',
    borderRadius: '1em',
    maxWidth: '23%',
    border: `0.1em solid ${theme.secondaryBackgroundBorder}`,
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      minWidth: '12em',
      height: '12em',
      paddingLeft: 0,
      paddingRight: 0
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      minWidth: '18em',
      height: '18em',
      paddingLeft: '1em',
      paddingRight: '1em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxsm}px)`]: {
      minWidth: '22em',
      height: '22em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxsm}px)`]: {
      minWidth: '24em',
      height: '24em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xsm}px)`]: {
      minWidth: '28em',
      height: '28em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxmd}px)`]: {
      minWidth: '32em',
      height: '32em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {
      minWidth: '38em',
      height: '38em'
    }
  },
  techLogo: {
    background: theme.isDebug && colors.pink[300],
    margin: '1px',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '1.5em',
      height: '1.5em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxsm}px)`]: {
      width: '2em',
      height: '2em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxmd}px)`]: {
      width: '2.5em',
      height: '2.5em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {
      width: '3em',
      height: '3em'
    }
  },
  description: {
    background: theme.isDebug && colors.pink[100],
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      padding: '0.1em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxmd}px)`]: {
      padding: '0.7em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {
      padding: '1em'
    }
  },
  workLinkImgLarge: {
    background: theme.isDebug && colors.pink[300],
    marginLeft: '0.5em',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'flex',
      width: '2em',
      height: '2em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xsm}px)`]: {
      width: '3em',
      height: '3em'
    }
  },
  workLinkImgSmall: {
    background: theme.isDebug && colors.pink[300],
    marginLeft: '0.5em',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'flex',
      width: '2em',
      height: '2em',
      paddingTop: '1em'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'none',
      width: '2em',
      height: '2em'
    }
  }
}));
