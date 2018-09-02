interface IPerson {
    name: string;
    age: number;
    [k: string]: any
}

class Person implements IPerson {
    constructor(public name: string, public age: number){}
}

class Dancer extends Person{
    private energy;
    constructor(state: IPerson) {
        super(state.name, state.age);
        (<any>Object).assign(this, state);
        this.energy = 100;
    }
    dance = () => {
        console.log(`dancer ${this.name} has ${this.energy--} nrg`)
    }
}

class Painter extends Person {
    private colors: number;
    constructor(state: IPerson) {
        super(state.name, state.age);
        (<any>Object).assign(this, state);
        this.colors = 7;
    }
    paint = () => {
        console.log(`painter ${this.name} paints with ${this.colors--} colors`)
    }
}

class Tester {
    constructor(){}
    test() {}
}

let person: IPerson = new Painter(
    new Dancer(
        new Person('jake', 32)
    )
);

(<Dancer>person).dance();
(<Painter>person).paint();
person.name = 'Mike';
(<Dancer>person).dance();
(<Painter>person).paint();
//(<Tester>person).test(); Error, cus` person doesn't have a test method