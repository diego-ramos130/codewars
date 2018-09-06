
function abbrevName(name) {
  let output = '';
  for (let i = 0; i < name.length; i++) {
    if (i === 0) {
      output += name.charAt(i).toUpperCase() + '.';
    }
    if (name.indexOf(' ') === i) {
      output += name.charAt(i + 1).toUpperCase();
      return output;
    }
  }
}