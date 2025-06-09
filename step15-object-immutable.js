const animal = { name: "ハリネズミ", age: 2, color: "グレー" };

const animal2 = {...animal, age: 3 }
console.log(animal2);

const animal3 = Object.assign({}, animal, { age: 3 });

console.log(animal3);