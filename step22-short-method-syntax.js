const animal = {
    name: "フクロウ",
    age: 3,
    introduce() {
        console.log(`${this.name}は${this.age}歳です！`)
    }
}
animal.introduce();