import colors from './style/colors';

export const randomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  // maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomColor = () => {
  const random = randomInt(0, 5);

  switch (random) {
    case 1: {
      return colors.yellow[100];
    }
    case 2: {
      return colors.yellow[200];
    }
    case 3: {
      return colors.red[200];
    }
    case 4: {
      return colors.teal[200];
    }
    default: {
      return colors.purple[100];
    }
  }
};

const isSmoothScrollSupported = ((document || {}).documentElement || {}).style
  ? 'scrollBehavior' in document.documentElement.style
  : false;

export const toTop = () => {
  if (isSmoothScrollSupported) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, 0);
  }
};

export const to = (y: number) => {
  if (isSmoothScrollSupported) {
    window.scroll({
      top: y,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, y);
  }
};

export const toElement = (element: Element) => {
  if (element) {
    if (isSmoothScrollSupported) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      element.scrollIntoView();
    }
  }
};

export default {
  toTop,
  to,
  toElement
};
