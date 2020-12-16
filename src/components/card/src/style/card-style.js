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
    width: '3rem',
    height: '3rem',
    padding: '1rem'
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
      paddingBottom: '1rem'
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
    overflowY: 'auto',
    height: '100%',
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
    background: theme.isDebug && colors.red[300],
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
  cardLogo: {
    background: theme.isDebug && colors.red[300],
    width: '100%',
    height: '100%'
  },
  // This style is shared between experience card container and card flip renderer container
  cardOuterContainer: {
    margin: '1rem',
    maxWidth: '23%',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      minWidth: '12rem',
      height: '12rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      minWidth: '18rem',
      height: '18rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxsm}px)`]: {
      minWidth: '22rem',
      height: '22rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxsm}px)`]: {
      minWidth: '24rem',
      height: '24rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xsm}px)`]: {
      minWidth: '28rem',
      height: '28rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxmd}px)`]: {
      minWidth: '32rem',
      height: '32rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {
      minWidth: '38rem',
      height: '38rem'
    }
  },
  cardInnerContainer: {
    width: '100%',
    height: '100%',
    paddingTop: '1rem',
    background: theme.isDebug ? colors.yellow[200] : theme.secondaryBackground,
    borderRadius: '1rem',
    border: `0.1em solid ${theme.secondaryBackgroundBorder}`,
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      paddingLeft: 0,
      paddingRight: 0
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    }
  },
  techLogo: {
    background: theme.isDebug && colors.pink[300],
    margin: '1px',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '1.5rem',
      height: '1.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxsm}px)`]: {
      width: '2rem',
      height: '2rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxmd}px)`]: {
      width: '2.5rem',
      height: '2.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {
      width: '3rem',
      height: '3rem'
    }
  },
  description: {
    background: theme.isDebug && colors.pink[100],
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      padding: '0.1rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxmd}px)`]: {
      padding: '0.7rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {
      padding: '1rem'
    }
  },
  workLinkImgLarge: {
    background: theme.isDebug && colors.pink[300],
    marginLeft: '0.5rem',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'none'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'flex',
      width: '2rem',
      height: '2rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xsm}px)`]: {
      width: '3rem',
      height: '3rem'
    }
  },
  workLinkImgSmall: {
    background: theme.isDebug && colors.pink[300],
    marginLeft: '0.5rem',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      display: 'flex',
      width: '2rem',
      height: '2rem',
      paddingTop: '1rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxxxsm}px)`]: {
      display: 'none',
      width: '2rem',
      height: '2rem'
    }
  },
  flipImgContainer: {
    background: theme.isDebug && colors.red[100],
    position: 'absolute',
    top: '1.1rem',
    right: '1.1rem',
    zIndex: 2
  },
  flipImg: {
    display: 'flex',
    width: '2rem',
    height: '2rem'
  },
  cardBack: {
    backgroundColor: theme.isDebug && colors.yellow[100],
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowX: 'hidden',
    overflowY: 'auto',
    maxHeight: '100%',
    '&::-webkit-scrollbar': {
      width: 0, // Chrome
      background: colors.transparent
    },
    scrollbarWidth: 'none',
    '&::-ms-overflow-style': 'none' /* IE 10+ */
  },

  gridList: {
    backgroundColor: theme.isDebug && colors.yellow[200],
    transform: 'translateZ(0)'
  }
}));
