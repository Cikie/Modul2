class Animal {
    protected name: string;
    protected color: string;
    protected age: number;


    constructor(name: string, color: string, age: number) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    go(){
        console.log("Moves")
    }
}

class Elephant extends Animal {
    protected legs: number;

    constructor(name: string, color: string, age: number, legs: number) {
        super(name, color, age);
        this.legs = legs;
    }
   go(){
       console.log("Elephant go")
   }
}
// let e:Elephant = new Elephant("Anh","den",2,4)
// e.go()
// let a:Animal = new Animal("Quan","red",3)
let e:Animal = new Elephant("khai","den",22,4)
e.go()