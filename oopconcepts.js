class Animal {
    constructor(weight) {
        this.eats = true;
        this.weight = weight;
    }
    eat(food) {
        console.log("I'm eating A LOT of ${food}");
    }
};
class Dog extends Animal   {
    constructor(weight) {
        super(weight);
        this.barks = true;
    }
};

class Cat extends Animal {
    constructor(weight) {
        super(weight);
        this.meows = true;
    }
    eat(food) {
        console.log("I'm eating A LOT of ${food}");
    }
};

class Americancat extends Cat {
    constructor(weight){
        super(weight);
        this.isAmerican = true;
    }
}
const cat1 = new Cat(10);

cat1.eat('Fish');
console.log(cat1.weight);