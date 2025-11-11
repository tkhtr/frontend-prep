/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const length = this.length;
  const result = [];
  for(let i = 0; i < length; i++) {
    const isTrue = callbackFn.call(thisArg, this[i], i, this);
    if(isTrue) {
      result.push(this[i]);
    }
  }
  return result;
};

const result1 = [1, 2, 3, 4].myFilter((value) => value % 2 === 0);
const result2 = [1, 2, 3, 4].myFilter((value) => value < 3);

console.log(result1);
console.log(result2);