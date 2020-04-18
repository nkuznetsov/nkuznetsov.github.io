import colors from './style/colors';

export const randomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  // maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomColor = () => {
  let val = colors.black;
  if (randomInt(0, 5) === 1) {
    val = colors.yellow[100];
  } else if (randomInt(0, 5) === 2) {
    val = colors.yellow[200];
  } else if (randomInt(0, 5) === 3) {
    val = colors.red[200];
  } else if (randomInt(0, 5) === 4) {
    val = colors.teal[200];
  } else {
    val = colors.purple[100];
  }
  return val;
};
