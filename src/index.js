
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
    return matrix.reduce((accumulator, current, index) => {
    if (index%2 !== 0) {
      current = current.reverse();
    }
    accumulator = accumulator.concat(current);
    return accumulator;
  }, []);
  }
  return [];
}
