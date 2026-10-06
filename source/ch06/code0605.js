class Fruit {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    print () {
        return `${this.name} 가격은 ${this.price}`;
    }
}
let apple = new Fruit('사과', 1500);
console.log(apple.name);

let array = [
    new Fruit('사과', 2000),
    new Fruit('바나나', 1000),
    new Fruit('파인애플', 3000)
];