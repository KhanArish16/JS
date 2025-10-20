function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function delay() {
  console.log("started....");
  await sleep(2000);
  console.log("after 2 sec");
}
// delay();

async function retry(fn, n) {
  for (let i = 0; i < n; i++) {
    try {
      return await fn();
    } catch (error) {
      console.log(`Attemp ${i + 1} Failed`);
    }
  }
}

let counter = 0;

function unstable() {
  counter++;
  if (counter < 3) throw new Error("failed");
  return "sucess";
}

retry(unstable, 5)
  .then((e) => console.log(e))
  .catch(console.error());
