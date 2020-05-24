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
    height: '30%',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {},
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {}
  },
  logoSection: {
    background: theme.isDebug && colors.teal[100]
  },
  titleSection: {
    background: theme.isDebug && colors.teal[300],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    paddingLeft: '0.5rem'
  },
  periodContainer: {
    background: theme.isDebug && colors.teal[300],
    display: 'flex',
    alignItems: 'center'
  },
  middleSectionWithOneLine: {
    background: theme.isDebug && colors.red[300],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
    height: '45%'
  },
  middleSectionWithWorkUrl: {
    background: theme.isDebug && colors.red[300],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
    height: '45%',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      paddingTop: '5.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.smxx}px)`]: {
      paddingTop: '2.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.smx}px)`]: {
      paddingTop: '1rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      paddingTop: 0
    }
  },
  middleSectionWithoutWorkUrl: {
    background: theme.isDebug && colors.red[300],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
    height: '55%',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      paddingTop: '5.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.smxx}px)`]: {
      paddingTop: '2.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.smx}px)`]: {
      paddingTop: '1rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.sm}px)`]: {
      paddingTop: 0
    }
  },
  bottomSectionWithWorkUrl: {
    background: theme.isDebug && colors.red[100],
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomSectionWithoutWorkUrl: {
    background: theme.isDebug && colors.red[100],
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  experienceLogo: {
    background: theme.isDebug && colors.red[300],
    width: '100%',
    height: '100%'
  },
  experienceCardContainer: {
    background: theme.isDebug ? colors.yellow[200] : theme.secondaryBackground,
    margin: '1rem',
    paddingLeft: '1rem',
    paddingTop: '1rem',
    paddingRight: '1rem',
    borderRadius: '1rem',
    maxWidth: '23%',
    border: `0.1rem solid ${theme.secondaryBackgroundBorder}`,
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      minWidth: '22rem',
      height: '22rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.smxx}px)`]: {
      minWidth: '24rem',
      height: '24rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.smx}px)`]: {
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
  techLogo: {
    background: theme.isDebug && colors.pink[300],
    margin: '1px',
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '1.5rem',
      height: '1.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.smxx}px)`]: {
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
  workLinkImg: {
    background: theme.isDebug && colors.pink[300],
    [`@media only screen and (min-width: ${BREAKPOINTS.xs}px)`]: {
      width: '1.5rem',
      height: '1.5rem',
      marginBottom: '0.5rem'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.smxx}px)`]: {
      width: '2rem',
      height: '2rem',
      margin: '1px'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxxmd}px)`]: {
      width: '2.5rem',
      height: '2.5rem',
      margin: '1px'
    },
    [`@media only screen and (min-width: ${BREAKPOINTS.xxmd}px)`]: {
      width: '3rem',
      height: '3rem',
      marginBottom: '2rem'
    }
  },
  companyLinkImg: {
    background: theme.isDebug && colors.pink[300],
    width: '1.5rem',
    height: '1.5rem',
    marginLeft: '0.5rem'
  }
}));
