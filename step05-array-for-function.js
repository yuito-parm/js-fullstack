animals = ["ハリネズミ", "フクロウ", "フェネック"];

function praiseAnimal (animal) {
    console.log(animal + "は素晴らしい！");
}

for (const animal of animals) {
    praiseAnimal(animal);
}