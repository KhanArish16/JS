const person = {
  name: "Alice",
  greet: function () {
    console.log("Hi, I’m " + this.name);
  },
};

// person.greet();

// const greetFn = person.greet();
// console.log(greetFn);

////////////// CALL /////////////////////

const user = {
  name: "Arish",
  age: 30,
  greet: function (greeting) {
    // console.log(`${greeting}, my name is ${this.name}.`);
  },
};

const anotherUser = {
  name: "Jane",
};
// user.greet.call(anotherUser, "Hello");

function sum() {
  let total = Array.prototype.reduce.call(
    arguments,
    (total, current) => total + current
  );

  console.log(total);
}
// sum(10, 20, 30, 40);

function submitData(username) {
  this.username = username;
}

function createUser(username, email, pass) {
  submitData.call(this, username);
  this.email = email;
  this.pass = pass;
}

const user1 = new createUser("arish", "asd@mcom", 123);
// console.log(user1);

////////////APPLY//////////////////
function introduce(greeting, ...hobbies) {
  const hobbyList = hobbies.join(", ");
  console.log(`${greeting}, my name is ${this.name}. I like to ${hobbyList}.`);
}

const userA = { name: "Alice" };
const userB = { name: "Bob" };

// introduce.call(userA, "heyy", "reading", "running");
// introduce.apply(userA, ["hii", "running", "reading"]);

const numbers = [10, 5, 23, 1, 45];

// `Math.max` doesn't accept an array.
// `apply` solves this by passing the elements as individual arguments.
const maxNumber = Math.max.apply(null, numbers);

console.log(maxNumber);

// /////////BIND////////////////////
