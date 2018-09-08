class Car {
    constructor() {
        this.wheels = 4;
        this.type = 'Hatchback';
    }

    whateverfunctioin() {
        console.log('Hey')
    }
}

class Ford extends Car{
    constructor(){
        super();
    }
}

const car = new Car();
car.whateverfunctioin()

const ford = new Ford();
ford.whateverfunctioin();


