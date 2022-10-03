// export class Cylinder {
//     public static getVolume(radius: number, height: number): number {
//         let baseArea: number = Math.PI * radius * radius;
//         let perimeter: number = 2 * Math.PI * radius;
//         let volume:number = perimeter * height + 2 * baseArea;
//         return volume;
//     }
// }

export class Cylinder {
    private static getPeremeter(radius: number): number {
        return 2 * Math.PI * radius;
    }

    private static getBaseArea(radius: number): number {
        return Math.PI * radius * radius
    }

    public static getVolume(radius: number, height: number): number {
        let baseArea: number = this.getBaseArea(radius);
        let perimeter: number = this.getPeremeter(radius);
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }
}