class Circle {
    private _color: string;
    private _filled: boolean;
    private _radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        this._color = color;
        this._filled = filled;
        this._radius = radius;
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

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }
}