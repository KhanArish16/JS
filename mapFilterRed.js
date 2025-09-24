// MAP

function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

let onePlus = myMap([1, 2, 3], (n) => n + 1);

// console.log(onePlus);

// FILTER

function myFilter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

const smalerthan10 = myFilter([7, 8, 9, 10, 11, 12], (n) => n < 10);

// console.log(smalerthan10);

// REDUCE

function myReduce(arr, callback, initialValue) {
  let accum = initialValue;

  for (let i = 0; i < arr.length; i++) {
    accum = callback(accum, arr[i], i, arr);
  }

  return accum;
}

const sumOfAll = myReduce([1, 2, 3], (acc, num) => acc + num, 0);
// console.log(sumOfAll);
