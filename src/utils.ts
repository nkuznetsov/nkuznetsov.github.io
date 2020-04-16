export const randomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  // maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomColor = () => {
  let val = 'black';
  if (randomInt(0, 5) === 1) {
    val = '#DAF7A6';
  } else if (randomInt(0, 5) === 2) {
    val = '#FFC300';
  } else if (randomInt(0, 5) === 3) {
    val = '#FF5733';
  } else if (randomInt(0, 5) === 4) {
    val = '#82E0AA';
  } else {
    val = '#85C1E9';
  }
  return val;
};
