import {Person} from "./Person";
import {Service} from "../service/Service";

export class HouseHold implements Service<Person> {
    private _id: number;
    private _member: number;
    private _address: string;
    listPerson: Person[] = []

    constructor(id: number,member:number, address: string) {
        this._id = id;
        this._member = member
        this._address = address;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get member(): number {
        return this._member;
    }

    set member(value: number) {
        this._member = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    add(t: Person) {
        this.listPerson.push(t);
        this._member++;
    }

    edit(id: number, t: Person) {
    }

    findAll() {
    }

    findById(id: number) {
    }
    findByNameNinh(){
        for (let i = 0; i < this.listPerson.length; i++) {
        if (this.listPerson[i].name == 'Ninh'){
            console.log(this)
        }
        }
    }
}