let name1 = {
  Fname: "arish",
  Lname: "khan",
};

let printName = function (city, state) {
  console.log(`hello ${this.Fname}${this.Lname} from ${city},${state}`);
};

// let myName = printName.bind(name1, "nagpur");
// myName("mahjarastara");

Function.prototype.myBind = function (context, ...args1) {
  let currentFn = this;
  return function (...args2) {
    return currentFn.apply(context, [...args1, ...args2]);
  };
};

Function.prototype.myBind2 = function (context, ...args1) {
  context.fn = this;

  return function (...args2) {
    return context.fn([...args1, ...args2]);
  };
};

let myName = printName.myBind2(name1, "nagpur");
myName("mahjarastara");
