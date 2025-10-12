const obj1 = {
  name: "arish",
  age: 23,
  add: {
    city: "Nagpur",
    state: "maharastra",
  },
};
console.log(obj1);

// SHALLOW COPY

// const obj2 = { ...obj1 };using spread
const obj2 = Object.assign({}, obj1); //using object.assing
obj2.name = "azib";
obj2.age = 24;
obj2.add.city = "pune";

// console.log(obj2);

// DEEP COPY

const deepObject = JSON.parse(JSON.stringify(obj1));
deepObject.add.city = "amravati";

// console.log(deepObject);

function deepCopy(obj) {
  if (typeof obj != "object" || obj === null) {
    return obj;
  }

  const copied = Array.isArray(obj) ? [] : {};
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copied[keys[i]] = deepCopy(obj[keys[i]]);
  }

  return copied;
}

let deep = deepCopy(obj1);

deep.add.city = "bhopal";
console.log(deep);

// Object.prototype.depCopy = function () {
//   if (typeof this != "object " || this === null) {
//     return this;
//   }

//   const copied = Array.isArray(this) ? [] : {};

//   const keys = Object.keys(this);

//   for (let i = 0; i < keys.length; i++) {
//     copied[keys[i]] = this[keys[i]].depCopy();
//   }

//   return copied;
// };

// let newObj = obj1.depCopy();

// console.log(newObj);
