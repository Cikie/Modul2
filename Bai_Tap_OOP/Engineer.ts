import {KeyManager} from "./KeyManager";
import {Gender} from "./Gender";
export class Engineer extends KeyManager{
    private _Trainning: string;


    constructor(id:number, fullName: string, age: number, genDer: Gender, Trainning: string) {
        super(id,fullName, age, genDer);
        this._Trainning = Trainning;
    }

    get Trainning(): string {
        return this._Trainning;
    }

    set Trainning(value: string) {
        this._Trainning = value;
    }
}