import { createUseStyles } from 'react-jss';
import { ThemeType } from 'models';
import { WAND_SVG } from 'utils/constants';
import { colors } from 'style/colors';

export default createUseStyles(theme => ({
  pointerCursor: {
    cursor: 'pointer'
  },
  wandCursor: {
    cursor: `url("${WAND_SVG}"), pointer`
  },
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
  hoverTransitionSmall: {
    transition: '0.1s ease'
  },
  popOutSmall: {
    transform: 'scale(1.1)'
  },
  rotateClockwise: { animation: '$rotateClockwise 1.5s' },
  '@keyframes rotateClockwise': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  rotateClockwiseAndGlow: { animation: '$rotateClockwiseAndGlow 1.5s' },
  '@keyframes rotateClockwiseAndGlow': {
    '0%': { transform: 'rotate(0deg)', background: colors.gray[300] },
    '50%': { background: colors.pink[300] },
    '100%': { transform: 'rotate(360deg)', background: colors.gray[300] }
  },
  resetImage: { animation: '$resetImage 1.5s ease-out' },
  '@keyframes resetImage': {
    '0%': { opacity: 0.3 },
    '100%': { opacity: 1 }
  },
  tooltip: {
    background: 'red'
  },
  shake: { animation: '$shake 0.5s', animationIterationCount: 'infinite' },
  '@keyframes shake': {
    '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
    '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
    '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
    '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
    '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
    '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
    '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
    '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
    '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
    '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
    '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' }
  }
}));
