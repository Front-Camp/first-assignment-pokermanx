/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  /* your logic here...*/
  last = arr[arr.length -1];
  let finalarr =[];
  for (let i = 1; i <= last; i++){
    finalarr.push(i);
  }
  return finalarr;
};

export default getFlags;

