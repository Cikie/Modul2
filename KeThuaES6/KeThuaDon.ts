//Kế thừa đơn

// class Shape {
//     area:number;
//
//     constructor(area: number) {
//         this.area = area;
//     }
// }
// class circle extends Shape {
//     display():void{
//         console.log("Area of the Circle" + this.area)
//     }
// }
// var obj = new circle(320)
// obj.display()

// Kế thừa nhiều cấp

class animal {
    eat():void{
        console.log("eating")
    }
}
class dogs extends animal{
    bark():void{
        console.log("barking")
    }
}
class babyDog extends dogs{
    weep():void{
        console.log("weeping")
    }
}
let obj = new babyDog();
obj.eat();
obj.weep();
obj.bark();
