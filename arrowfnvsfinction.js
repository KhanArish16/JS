//a = 10;
// console.log(a);

let a;

//func expression
var sum = () => {
  console.log("sum func");
};
var name = "Azib";
var age = 36;
const person = {
  name: "Arish",
  age: 21,
  neighbour: {
    name: "Raza",
    getName: () => console.log(this.name),
  },
  consoleInfo: function () {
    console.log(this.getInfo());
  },
};

person.neighbour.getName();
const arish = person.getInfo;

function add() {
  console.log("Console", this);
}

function Animal(name) {
  this.name = name;
  console.log(this);
  this.walk = function () {
    return `${this.name} can walk`;
  };
}

console.log(add());
const cheetah = new Animal("Ariyan"); // {} this-> {}

console.log(cheetah);

console.log(cheetah.walk());

function WildAnimals() {}
Object.setPrototypeOf(new WildAnimals(), Animal);
const elephant = new WildAnimals("Elephant");
console.log(elephant);
/**
 * 1) functions with function keyword are hoisted and arrow functions are not hoisted
 *
 *
 */
