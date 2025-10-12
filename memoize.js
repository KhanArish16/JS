function expensiveOp(a, b) {
  let sum = 0;
  for (let i = 0; i < 10000000; i++) {
    sum += a * b;
  }

  return sum;
}

function memoized(fn) {
  let cache = {};
  return function (...args) {
    let arguments = JSON.stringify(args);
    if (!cache[arguments]) {
      cache[arguments] = fn(...args);
    }

    return cache[arguments];
  };
}

let memoCall = memoized(expensiveOp);

console.time();
console.log(memoCall(2012, 2030));
console.timeEnd();

console.time();
console.log(memoCall(2012, 2030));
console.timeEnd();
