/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if(initialValue === undefined && this.length === 0) {
    throw new Error;
  }

  let hasInitialValue = initialValue !== undefined;
  let accumulator = hasInitialValue ? initialValue : this[0];
  let startIndex = hasInitialValue ? 0 : 1;

  for(let i = startIndex; i < this.length; i++) {
    if(!this[i]) {
      continue;
    }
    accumulator = callbackFn(accumulator, this[i], i, this);
  }

  return accumulator;
};

console.log([1,2,3,5].myReduce(add));

function add(prev, next) {
  return prev + next;
}