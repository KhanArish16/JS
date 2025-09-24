// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
// }

function usePrev() {
  let prev;

  return function (current) {
    const old = prev; // store previous
    prev = current; // update previous
    return old;
  };
}

// Example
const getPrev = usePrev();

// console.log(getPrev(10)); // undefined (no previous yet)
// console.log(getPrev(20)); // 10
// console.log(getPrev(30)); // 20
// console.log(getPrev(40)); // 30
// console.log(getPrev(40));
// console.log(getPrev(40));

function factorial(n) {
  if (n === 1) return 1; // base case
  return n * factorial(n - 1); // recursive step
}

// console.log(factorial(5));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ??
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

// console.log(findSolution(24));
