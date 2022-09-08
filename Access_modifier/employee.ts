import {Staff} from "./QuanLyNhanSu";

export class employeeManager {
    static list:Staff[] = [];

    constructor() {
    }

    static add(staff: Staff){
        this.list.push(staff);
    }
    static show(){
        return this.list
    }
    // static delete(id:number){
    //     this.list.splice(id,1);
    // }
    static find(id){
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].ID == id){
                return i;
            }
        }
    }
}