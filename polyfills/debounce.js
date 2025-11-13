/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timerId = null;

  return function(...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      func.apply(this, args);
    }, wait);
  }
}
