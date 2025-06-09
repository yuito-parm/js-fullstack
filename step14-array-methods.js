const animals = [
    { name: "ハリネズミ", age: 2 },
    { name: "フクロウ", age: 3 },
    { name: "フェネック", age: 1 },
    { name: "イグアナ", age: 5 }
];

const names = animals.map(animal => animal.name);
console.log(names);

const over3 = animals.filter(animal => animal.age >= 3);
console.log(over3);

const age1 = animals.find(animal => animal.age >= 3);
console.log(age1);

const has5 = animals.some(animal => animal.age === 5);
console.log(has5);

const allOver1 = animals.every(animal => animal.age >= 1);
console.log(allOver1);

const sum = animals.reduce((total, animal) => total + animal.age, 0)
console.log(sum);