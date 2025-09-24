function once(fn) {
  let result;
  let called = false;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }

    return result;
  };
}

function greet(name) {
  console.log("Hello " + name);
}

const greetOnce = once(greet);

greetOnce("Alice");
greetOnce("Bob");
greetOnce("Charlie");

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// // Usage:
// (async function demo() {
//   console.log("Start");
//   await sleep(2000); // wait 2s
//   console.log("After 2 seconds");
// })();

// const controller = new AbortController();
// const signal = controller.signal;

// fetch("https://api.github.com/users/google", { signal })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     // A cancelled request will show up here
//     if (error.name === "AbortError") {
//       console.log("Fetch request was cancelled.");
//     } else {
//       console.error("Fetch error:", error);
//     }
//   });

// // Cancel the request after 1 second
// setTimeout(() => {
//   controller.abort();
// }, 1000);
