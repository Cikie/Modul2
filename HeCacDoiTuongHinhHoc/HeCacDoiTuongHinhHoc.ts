export class Shape {
    private _color: string;
    private _filled: boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get filled(): boolean {
        return this._filled;
    }

    set filled(value: boolean) {
        this._filled = value;
    }

    public toString(): string {
        return "A Shape with color of "
            + this.color
            + " and "
            + (this.filled ? "filled" : "not filled");
    }
}

export class Rectangle extends Shape {
    private _width: number;
    private _height: number;

    constructor(color: string, filled: boolean, width: number, height: number) {
        super(color, filled);
        this._width = width;
        this._height = height;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
    get area():number{
        return this._height * this._width
    }
    get Perimeter():number{
        return 2 * (this._width+this._height)
    }
    toString(): string {
        return "A Rectangle with width="
            + this.width
            + " and height="
            + this.height
            + ", which is a subclass of "
            + super.toString();
    }
}


export class Circle extends Shape {
    private _radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get area(): number {
        return this._radius * this._radius * Math.PI;
    }

    get perimeter(): number {
        return 2 * this._radius * Math.PI
    };

    toString(): string {
        return "A circle with radius = "
            + this._radius + ",which is a subclass of"
            + super.toString();
    }
}
 export class Square extends Rectangle{
    constructor(color:string,filled:boolean,side:number) {
        super(color,filled,side,side);
    }
     public getSide(): number {
         return this.width;
     }

     public setSide(side: number): void {
         this.setWidth(side);
         this.setLength(side);
     }

     //Override method
     public setWidth(width: number): void {
         this.setSide(width);
     }

     //Override method
     public setLength(length: number): void {
         this.setSide(length);
     }

     //Override method
     public toString(): string {
         return "A Square with side="
             + this.getSide()
             + ", which is a subclass of "
             + super.toString();
     }
}


