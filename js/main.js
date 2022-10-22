const getRandInt = (min, max) => {
  // получить случайное число от (min-0.5) до (max+0.5)
  if (min >= 0 && max >= 0 && max > min) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  return NaN;
};
getRandInt(2, 23);

const measureString = (str, maxLength) => {
  const result = (str.length <= maxLength && str.length !== 0);
  return result;
}
measureString('2', 3);

