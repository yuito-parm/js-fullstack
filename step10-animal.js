export class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`${this.name}は${age}歳です！`);
    }
}