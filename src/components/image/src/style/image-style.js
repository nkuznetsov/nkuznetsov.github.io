import { createUseStyles } from 'react-jss';
import { ThemeType } from '../../../../models';
import colors from '../../../../style/colors';

export default createUseStyles(theme => ({
  themed: {
    borderRadius: '30%',
    background: theme.isDebug
      ? colors.white
      : theme.type === ThemeType.Light
      ? 'transparent'
      : colors.gray[300]
  },
  hoverTransition: {
    transition: '0.5s'
  },
  popOut: {
    transform: 'scale(1.5)'
  },
  popIn: {
    transform: 'scale(1)'
  },
  rotateClockwise: { animation: '$rotateClockwise 1.5s' },
  '@keyframes rotateClockwise': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  rotateClockwiseAndGlow: { animation: '$rotateClockwiseAndGlow 1.5s' },
  '@keyframes rotateClockwiseAndGlow': {
    '0%': { transform: 'rotate(0deg)', background: colors.gray[300] },
    '50%': { background: colors.red[100] },
    '100%': { transform: 'rotate(360deg)', background: colors.gray[300] }
  },
  resetImage: { animation: '$resetImage 1.5s ease-out' },
  '@keyframes resetImage': {
    '0%': { opacity: 0.3 },
    '100%': { opacity: 1 }
  }
}));
