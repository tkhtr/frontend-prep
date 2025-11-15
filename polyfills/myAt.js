/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt = function (index) {
  const array = this;

  if(index > -1) {
    return array[index];
  }
  return array[array.length + index];
};