let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);

const obj = {
  name: "Bob",
  greet: () => {
    console.log(this.name); // 'this' is inherited from 'greet' function's scope, so it refers to 'obj'
  },
};
obj.greet();
