function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  if (min >= 0 && max >= 0) {
    if (max <= min) { return NaN; }
    else {
      const rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }
  }
  else {
    return NaN;
  }

}
randomInteger(2, 23);

function lengthString(str, maxLength) {
  const stringLength = str.length;
  if (stringLength <= maxLength && stringLength !== 0) {
    return true;
  }
  else { return false; }
}
lengthString('', 3);

