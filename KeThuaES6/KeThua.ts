//Kế thừa là cơ chế cho phép một lớp thừa hưởng các thuộc tính và phương thức của một lớp khác đã được định nghĩa trước đó.

class Vehicle {
    private _name: string;
    private _seat: number;

    constructor(name, seat) {
        this._name = name
        this._seat = seat
    }

    get getName(): string {
        return this._name;
    }

    get getSeat(): number {
        return this._seat;
    }
}

// Cho lớp Taxi kế thừa lớp Vehicle

class Taxi extends Vehicle {
    public licensePlate: string

    constructor(name, seat, licensePlate: string) {
        super(name, seat);
        this.licensePlate = licensePlate;
    }

    get getLicensePlate() {
        return this.licensePlate
    }
}

let taxi = new Taxi('Vios 2020', 4, '34A-9999');
console.log(taxi.getName)
console.log(taxi.getLicensePlate)
