const ava = [22, 1, 2, 3];

Array.prototype.addTwo = function () {
  return this.map((num) => num + 2);
};

console.log(ava.addTwo());

class User {
  constructor(name, pass) {
    this.name = name;
    this.pass = pass;
  }

  hashPas() {
    return `${this.pass}abc`;
  }
}

const arish = new User("Arish", "123");
console.log(arish);

// const obj = {
//   name: "arsh",
//   pass: 123,
// };

// for (const [keys, values] of Object.entries(obj)) {
//   console.log(keys, values);
// }

console.log(this);
