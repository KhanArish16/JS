// MAP

Array.prototype.myMap = function (callBack) {
  let tem = [];

  for (let i = 0; i < this.length; i++) {
    tem.push(callBack(this[i], i, this));
  }
  return tem;
};

// console.log([1, 2, 3, 4].myMap((n) => n * 2));

// //////////////////////////////////////////////////////////
// FILTER
// ///////////////////////////////////////////////////////////
Array.prototype.myFilter = function (callBack) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

// console.log([1, 2, 3, 4, 5].myFilter((n) => n <= 3));

// ////////////////////////////////////////////////////////
// REDUCE
// ///////////////////////////////////////////////////////

Array.prototype.myReduce = function (callback, initialValue) {
  let accum = initialValue;
  for (let i = 0; i < this.length; i++) {
    accum = callback(accum, this[i]);
  }

  return accum;
};

const sumOfAll = [1, 2, 3, 4].myReduce((acc, num) => acc + num, 10);
// console.log(sumOfAll);

// //////////////////////////////////////////////////////////
// CALL APPLY BIND
// //////////////////////////////////////////////////////////

let name1 = {
  Fname: "arish",
  Lname: "khan",
};

let printName = function (city, state) {
  console.log(`hello ${this.Fname}${this.Lname} from ${city},${state}`);
};

Function.prototype.mycall = function (context, ...args) {
  if (typeof this != "function") {
    throw new Error(
      `${this} is not a function , myCall can be apply on Functions`
    );
  }

  let fn = Symbol();
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myapply = function (context, args = []) {
  let fn = Symbol();
  context.fn = this;
  context.fn(...args);
};

Function.prototype.mybind = function (context, ...args1) {
  let fn = Symbol();
  context.fn = this;

  return function (...args2) {
    return context.fn(...args1, ...args2);
  };
};

let user = printName.mybind(name1, "ngp");
// console.log(user("mh"));

// ///////////////////////////////////////////////////////////////////////
// JSON STRINGIFY
//////////////////////////////////////////////////////////////////////////
function jsonString(value) {
  if (typeof value === "null") return "null";

  if (typeof value === "number" || typeof value === "boolean")
    return String(value);

  if (typeof value === "string") return `"${value}"`;

  if (typeof value === "object") {
    const isArray = Array.isArray(value);
    const keys = Object.keys(value);

    let temp = [];

    for (let i = 0; i < keys.length; i++) {
      if (isArray) {
        temp.push(jsonString(value[i]));
      } else {
        temp.push(`"${keys[i]}":${jsonString(value[keys[i]])}`);
      }
    }

    return isArray ? `[${temp.join(",")}]` : `{${temp.join(",")}}`;
  }

  return undefined;
}

// console.log(jsonString({ a: 1, b: "hi", c: true, d: [1, 2, 3] }));
// console.log(JSON.stringify({ a: 1, b: "hi", c: true, d: [1, 2, 3] }));

// ///////////////////////////////////////
// ONCE FUNCTION
// ////////////////////////////////////////

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

function greet(name, surname) {
  console.log("Hello " + name + surname);
}
const greetOnce = once(greet);
// greetOnce("Alice", "khan");
// greetOnce("Bob", "ab");
// greetOnce("Charlie", "abs");

let hello = once((a, b) => console.log("heyyy", a, b));

// hello(1, 2);
// hello(2, 3);
// hello(3, 3);
