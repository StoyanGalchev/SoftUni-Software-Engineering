class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
function cats(input) {
    input.forEach((element) => {
        let [name, age] = element.split(" ");
        let cat = new Cat(name, Number(age));
        cat.meow();
    });
}
cats(["Mellow 2", "Tom 5"]);
