import {point2d} from "./2D";

class Point3d extends point2d{
    private _z:number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
    getxyz():object{
        return {
        z:this._z,
        x:this._x,
        y:this._y
        }
    }
    setxyz(x:number,y:number,z:number):void {
        this._x = x
        this._y = y
        this._z = z
    }
}
let point3d = new Point3d(3,5,7);
console.log(point3d.getxyz())
point3d.setxyz(35,25,5)
console.log(point3d.getxyz())