import {Shape} from "./Shape";


export class Triangle extends Shape{
         _name:string;
         _color:string;

    constructor(side1: number, side2: number, side3: number, name: string, color: string) {
        super(side1, side2, side3);
        this._name = name;
        this._color = color;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    get Area(): number {
        let p = (this._side1 + this._side2 + this._side3) / 2
        return Math.sqrt(p * (p - this._side1) * (p - this._side2) * (p - this._side3))
    }
    get Parameter(): number {
        return this._side1 + this._side2 + this._side3
    }
}

let triangle = new Triangle(3,4,5,"triangle","red");
console.log(triangle.Area)
console.log(triangle.Parameter)