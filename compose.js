function addTwo(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

const compose = function (...fns) {
  return function (...values) {
    return fns.reduceRight((acc, fn) => {
      return Array.isArray(acc) ? fn.call(this, ...acc) : fn.call(this, acc);
    }, values);
  };
};

const pipe = (...fns) =>
  function (...values) {
    return fns.reduce((acc, fn) => {
      return Array.isArray(acc) ? fn.call(this, ...acc) : fn.call(this, acc);
    }, values);
  };

const obj = {
  factor: 2,
  add(a, b) {
    return a + b;
  },
  multiply(x) {
    return x * this.factor;
  },
};

const ans = compose(square, addTwo);
console.log(ans(4, 2));

const composed = compose(obj.multiply, obj.add);
const piped = pipe(obj.add, obj.multiply);
