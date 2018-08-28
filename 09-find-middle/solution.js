var gimme = function (inputArray) {
  const max = Math.max.apply(Math, inputArray);
  const min = Math.min.apply(Math, inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < max && inputArray[i] > min) {
      return i;
    }
  }
};