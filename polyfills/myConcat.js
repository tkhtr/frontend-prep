/**
 * @template T
 * @param {...(T | Array<T>)} items
 * @return {Array<T>}
 */
Array.prototype.myConcat = function (...items) {
  let result = [...this];

  for(const val of items) {
    if(!Array.isArray(val)) {
      result.push(val);
    } else {
      //result.push.apply(result, val);
      //Array.prototype.push.apply(result, val);
      result = [...result, ...val];
    }
  }

  return result;
};