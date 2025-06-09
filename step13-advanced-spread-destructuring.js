const nums = [1, 2, 3, 4, 5];
const [first, ...rest] = nums;
console.log(first);
console.log(rest);

const animal = {name: "フクロウ", age: 2, color:"茶色", type:"鳥"};
const {name, age, ...other} = animal;
console.log(name);
console.log(age);
console.log(other);