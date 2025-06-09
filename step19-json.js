const animal = { name: "フクロウ", age: 3, type: "鳥" };

const jsonStr = JSON.stringify(animal);
console.log(jsonStr);
console.log(typeof jsonStr);

const obj = JSON.parse(jsonStr);
console.log(obj);
console.log(typeof obj);