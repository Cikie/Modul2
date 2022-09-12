import {KeyManager} from "./KeyManager";
import {Gender} from "./Gender";

export class Staff extends KeyManager {
    private _level: number;

    constructor(id:number, fullName: string, age: number, genDer: Gender, level: number) {
        super(id,fullName, age, genDer);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}