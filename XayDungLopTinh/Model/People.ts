import {City} from "./City";

export class People{
    private _id:number;
    private _name:string;
    private _age:number;
    private _city:City;

    constructor(id: number, name: string, age: number, city: City) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._city = city;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get city(): City {
        return this._city;
    }

    set city(value: City) {
        this._city = value;
    }
}