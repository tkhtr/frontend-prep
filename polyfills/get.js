/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  const splittedPath = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let result = objectParam;

  for(let i = 0; i < splittedPath.length; i++) {
    if(result === undefined || result === null) {
      return defaultValue;
    }
    result = result[splittedPath[i]];
  }

  return result === undefined ? defaultValue : result;
}