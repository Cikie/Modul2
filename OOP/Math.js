// Lớp Shape
// class Shape {
//     color: string;
//     filled: boolean
//     constructor(color: string, filled: boolean) {
//         this.color = color;
//         this.filled = filled;
//     }
// }
// let shape = new Shape("red",false)
// console(shape);
// Lớp Circle
var Circle = /** @class */ (function () {
    function Circle(radius, color, filled) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Object.defineProperty(Circle.prototype, "Perimeter", {
        get: function () {
            return 2 * this.radius * Math.PI;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
var circle = new Circle(3.5, "indigo", true);
console.log(circle);
//Lớp Rectangle
// class Rectangle {
//     width: number;
//     length: number;
//     color: string;
//     filled: boolean;
//     constructor(width:number,
//                 length: number,
//                 color:string,
//                 filled:boolean) {
//         this.width=width;
//         this.length=length;
//         this.color=color;
//         this.filled=filled;
//     }
//     getArea(): number{
//         return this.width* this.length
//     }
//     getPerimeter():number{
//         return 2* (this.width + this.length);
//     }
// }
// let rectangle = new Rectangle(2.5,3.8,"red",true);
//
// console.log(rectangle)
//
// Lớp Square
// class Square {
//     color: string;
//     filled: boolean;
//     size: number
//     constructor(color:string,
//                 filled:boolean,
//                 size:number) {
//         this.color = color;
//         this.filled = filled;
//         this.size = size;
//     }
// }
// let square = new Square("yellow",true,5.8)
// console.log(square)
