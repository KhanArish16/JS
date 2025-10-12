function fetch() {
  return new Promise((res, rej) => {
    let sucess = false;
    if (sucess) {
      setTimeout(() => res("promise resolved"), 2000);
    } else {
      rej("rejected");
    }
  });
}

fetch()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
