// closure
function multipilcation(factor) {
  return (num) => num * factor;
}

const ans = multipilcation(2);
// console.log(ans(3));

function usePrev() {
  let previous = null;
  return function (curr) {
    let old = previous;
    previous = curr;
    return old;
  };
}

const prev = usePrev();

// console.log(prev(1));
// console.log(prev(2));
// console.log(prev(3));

function secretCode() {
  let secret = "JS is awesome";
  return {
    reveal: function () {
      return secret;
    },
    change: function (newSecret) {
      secret = newSecret;
    },
  };
}

const code = secretCode();
// console.log(code.reveal(), 1);
// code.change("Closures are powerful");
// console.log(code.reveal(), 2);
