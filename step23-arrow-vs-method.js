const animal = {
    name: "フクロウ",
    age: 3,
    introduceNomal() {
        console.log(`Normal: ${this.name}は${this.age}歳です！`);
    },
    introduceArrow: () => {
        console.log(`Arrow: ${this.name}は${this.age}歳です！`);
    }
};

animal.introduceNomal();
animal.introduceArrow();