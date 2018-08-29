

function cubeOdd(arr) {
  if (arr.filter(x => typeof x !== "number").length > 0) {
    return undefined;
  } else {
    return arr.map(x => Math.pow(x, 3)).filter(x => x % 2 === 1 || x % 2 === -1).reduce((a, v, i) => a + v)
  }
}