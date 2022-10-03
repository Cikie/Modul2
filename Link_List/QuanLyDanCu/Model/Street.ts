import {HouseHold} from "./HouseHold";
import {Service} from "../service/Service";

export class Street implements Service<HouseHold>{
    id:number;
    name:string;
    listHouseHold:HouseHold[] = []


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }


    add(t: HouseHold) {
        this.listHouseHold.push(t)
    }

    edit(id: number, t: HouseHold) {
    }

    findAll() {
        return this.listHouseHold
    }

    findById(id: number) {
    }
    findByIndex(index:number){
        return this.listHouseHold[index];
    }
    findMemberThan2(){
        let listHouseHoldMoreThan2:HouseHold[] = [];
        for (let i = 0; i < this.listHouseHold.length; i++) {
            if (this.listHouseHold.length >= 2){
                listHouseHoldMoreThan2.push(this.listHouseHold[i])
            }
        }
        return listHouseHoldMoreThan2;
    }
    findA(){
        if (this.name == 'A'){
            for (let i = 0; i < this.listHouseHold.length; i++) {
                this.listHouseHold[i].findByNameNinh();
            }
        }
    }
}