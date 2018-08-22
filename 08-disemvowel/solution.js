function disemvowel(str) {
let regex = /[aeiouAEIOU]/gm ;
  return str.replace(regex, "");
}