import {Gender} from "./Gender";

export class KeyManager {
     _ID: number;
     _fullName: string;
     _age: number;
     _genDer: Gender;

    constructor(ID:number, fullName: string, age: number, genDer: Gender) {
        this._ID = ID
        this._fullName = fullName;
        this._age = age;
        this._genDer = genDer;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get genDer(): Gender {
        return this._genDer;
    }

    set genDer(value: Gender) {
        this._genDer = value;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }
}