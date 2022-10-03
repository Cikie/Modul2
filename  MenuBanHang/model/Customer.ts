export class Customer{
    private _Name:string
    private _id:number;

    constructor(Name: string, id: number) {
        this._Name = Name;
        this._id = id;
    }


    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}