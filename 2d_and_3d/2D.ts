export class point2d {
    _x: number;
    _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    getxy(): object {
        return {
            x: this._x,
            y: this._y
        }
    }

    setxy(x: number, y: number): void {
        this._x = x
        this._y = y
    }
}

let Point2d = new point2d(2, 6);
console.log(Point2d.getxy())