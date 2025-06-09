let animals = ["ハリネズミ", "フクロウ", "フェネック"];

animals.forEach(function(animal) {
    console.log(animal + "が好きです！");
});

let longNameedAnimals = animals.filter(function(animal) {
    return animal.length >= 5;
});

console.log(longNameedAnimals);