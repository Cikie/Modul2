import {Circle} from "../HeCacDoiTuongHinhHoc/HeCacDoiTuongHinhHoc";

class Cylynder extends Circle {
    private _height: number;

    constructor(color: string, filled: boolean, radius: number, height: number) {
        super(color, filled, radius);
        this._height = height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get thisNum(): number {
        return Math.PI * Math.pow(this.radius, 2) * this._height
    }
}
let cylender = new Cylynder("red",true,3,5)
console.log(cylender.thisNum)