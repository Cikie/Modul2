import {KeyManager} from "./KeyManager";
import {Gender} from "./Gender";
import {Level} from "./Level";

export class Worker extends KeyManager {
    private _level: Level;

    constructor(id:number,fullName: string, age: number, genDer: Gender, level: Level) {
        super(id,fullName, age, genDer);
        this._level = level;
    }

    get level(): Level {
        return this._level;
    }

    set level(value: Level) {
        this._level = value;
    }
}