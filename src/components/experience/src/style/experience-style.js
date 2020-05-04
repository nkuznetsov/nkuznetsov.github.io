import { createUseStyles } from 'react-jss';
import { scrollbarWidth } from '../../../../constants';
import colors from '../../../../style/colors';

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
    marginLeft: scrollbarWidth
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
    maxHeight: '28%'
  },
  titleSection: {
    background: theme.isDebug ? colors.teal[200] : colors.transparent,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    height: '28%',
    paddingLeft: '0.5rem'
  },
  middleSection: {
    background: theme.isDebug ? colors.teal[300] : colors.transparent,
    textAlign: 'center',
    border: '1px solid blue',
    height: '62%'
  },
  bottomSection: {
    // background: 'theme.isDebug ? colors.red[100] : colors.transparent',
    // background: 'cyan',
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
    maxWidth: '20%',
    padding: '1rem',
    borderRadius: '1rem',
    background: theme.secondaryBackground
  },
  techLogo: {
    width: '3rem',
    height: '3rem'
  }
}));
