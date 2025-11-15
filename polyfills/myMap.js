/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const array = this;
  const result = [];

  for(let i = 0; i < array.length; i++) {
    if(!array.hasOwnProperty(i)) {
      continue;
    }
    let val = callbackFn.call(thisArg, array[i], i, array);
    result[i] = val;
  }
  
  return result;
};