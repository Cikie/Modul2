export class Circle{
    private radius:number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(value: number):void {
        this.radius = value;
    }
    toString():string{
        return 'A Circle with Radius ='+this.getRadius()
    }
}

export interface Comparable{
    compareTo(o:object):number
}