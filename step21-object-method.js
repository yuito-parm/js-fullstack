const animal = {
    name: "フクロウ",
    age: 3,
    introduce: function() {
        console.log(`${this.name}は${this.age}歳です！`);
    }
};

animal.introduce();