function capitalize(s, arr) {
  let ret = '';
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(i)) {
      ret += s.charAt(i).toUpperCase();
    } else {
      ret += s.charAt(i);
    }
  }
  return ret
};