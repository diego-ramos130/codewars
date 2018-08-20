

function capitalize(s) {
  let i;
  let temp = '';
  let tempOdd = '';
  for (i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      temp += s.charAt(i).toUpperCase();
      tempOdd += s.charAt(i);
    } else {
      temp += s.charAt(i);
      tempOdd += s.charAt(i).toUpperCase();
    }
  }
  return [temp, tempOdd];
}