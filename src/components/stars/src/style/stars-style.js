import { createUseStyles } from 'react-jss';
import { randomInt, randomColor } from '../../../../utils';
import colors from '../../../../style/colors';

const starSkySize = 2600;
const smallStarSize = '0.15rem';
const mediumStarSize = '0.25rem';
const largeStarSize = '0.3rem';

const getStars = numberOfStars => {
  let stars = `${randomInt(0, starSkySize)}px ${randomInt(
    0,
    starSkySize
  )}px ${randomColor()}`;

  for (let i = 2; i <= numberOfStars; i++) {
    stars = `${stars} , ${randomInt(0, starSkySize)}px ${randomInt(
      0,
      starSkySize
    )}px ${randomColor()}`;
  }

  return stars;
};

const smallStar = getStars(800);
const mediumStar = getStars(300);
const largeStar = getStars(100);

export default createUseStyles(theme => ({
  stars1: {
    width: smallStarSize,
    height: smallStarSize,
    borderRadius: '50%',
    background: colors.transparent,
    boxShadow: smallStar,
    animation: '$animateStars 150s linear infinite',

    '&:after': {
      content: '" "',
      position: 'absolute',
      top: `${starSkySize}px`,
      width: smallStarSize,
      height: smallStarSize,
      borderRadius: '50%',
      background: colors.transparent,
      boxShadow: smallStar
    }
  },
  stars2: {
    width: mediumStarSize,
    height: mediumStarSize,
    borderRadius: '50%',
    background: colors.transparent,
    boxShadow: mediumStar,
    animation: '$animateStars 100s linear infinite',

    '&:after': {
      content: '" "',
      position: 'absolute',
      top: `${starSkySize}px`,
      width: mediumStarSize,
      height: mediumStarSize,
      borderRadius: '50%',
      background: colors.transparent,
      boxShadow: mediumStar
    }
  },
  stars3: {
    width: largeStarSize,
    height: largeStarSize,
    borderRadius: '50%',
    background: colors.transparent,
    boxShadow: largeStar,
    animation: '$animateStars 50s linear infinite',

    '&:after': {
      content: '" "',
      position: 'absolute',
      top: `${starSkySize}px`,
      width: largeStarSize,
      height: largeStarSize,
      borderRadius: '50%',
      background: colors.transparent,
      boxShadow: largeStar
    }
  },
  '@keyframes animateStars': {
    '0%': {
      transform: `translateY(-${starSkySize}px)`
    },
    '100%': {
      transform: 'translateY(0px)'
    }
  }
}));
