import { createUseStyles } from 'react-jss';
import { SCROLLBAR_WIDTH } from 'utils/constants';
import colors from 'style/colors';

export default createUseStyles(theme => ({
  experience: {
    background: theme.isDebug ? colors.teal[200] : theme.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    color: theme.onBackground
  },
  toTopNavIcon: {
    background: theme.isDebug ? colors.teal[100] : colors.transparent,
    width: '3rem',
    height: '3rem',
    padding: '1rem'
  },
  main: {
    background: theme.isDebug ? colors.pink[100] : colors.transparent,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    height: '100%',
    marginLeft: SCROLLBAR_WIDTH
  },
  toTopContainer: {
    background: theme.isDebug ? colors.pink[200] : colors.transparent,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  experiencesContainer: {
    background: theme.isDebug ? colors.pink[300] : colors.transparent,
    height: '50%',
    justifyContent: 'space-around',
    marginRight: '17px'
  },
  logoSection: {
    background: theme.isDebug ? colors.teal[100] : colors.transparent,
    height: '30%'
  },
  titleSection: {
    background: theme.isDebug ? colors.teal[200] : colors.transparent,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    height: '30%',
    paddingLeft: '0.5rem'
  },
  middleSection: {
    background: theme.isDebug ? colors.teal[300] : colors.transparent,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%'
  },
  bottomSection: {
    background: theme.isDebug ? colors.red[100] : colors.transparent,
    textAlign: 'center',
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  experienceLogo: {
    background: theme.isDebug ? colors.red[200] : colors.transparent,
    width: '100%',
    height: '100%'
  },
  experienceCardContainer: {
    maxWidth: '23%',
    paddingLeft: '1rem',
    paddingTop: '1rem',
    paddingRight: '1rem',
    borderRadius: '1rem',
    background: theme.secondaryBackground,
    border: `0.1rem solid ${theme.secondaryBackgroundBorder}`
  },
  techLogo: {
    background: theme.isDebug ? colors.pink[300] : colors.transparent,
    width: '3rem',
    height: '3rem',
    margin: '1px'
  },
  description: {
    background: theme.isDebug ? colors.pink[100] : colors.transparent,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  workLinkImg: {
    background: theme.isDebug ? colors.pink[300] : colors.transparent,
    width: '3rem',
    height: '3rem',
    marginBottom: '2rem'
  },
  companyLinkImg: {
    background: theme.isDebug ? colors.pink[300] : colors.transparent,
    width: '1.5rem',
    height: '1.5rem',
    marginLeft: '0.5rem'
  },
  companyContainer: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'
  }
}));
