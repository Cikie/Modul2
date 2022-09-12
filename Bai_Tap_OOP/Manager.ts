
import {KeyManager} from "./KeyManager";
import {Staff} from "./Staff";
import {Engineer} from "./Engineer";
import {Worker} from "./Worker";

class Manager {
    static list: KeyManager[] = []

    constructor() {
    }

    static add(staff: KeyManager) {
        this.list.push(staff)
    }

    static show() {
        return this.list
    }

    static find(ID: number): number {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].ID === ID) {
                return i;
            }
        }
        return -1
    }
    static edit(ID:number,fullName:string){
        let index = this.find(ID)
        for (let i = 0; i < this.list.length; i++) {
            if(index == i){
                this.list[i].fullName =fullName
            }
        }
    }
    static findByName(fullName:string){
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i].fullName ==fullName){
                return this.list[i];
            }
        }
    }
}
function role(){
    let staff:Engineer = new Engineer(1,"Đào Ngọc A",26,0,"Senior");
    let staff1:Staff = new Staff(2,"Nguyễn Văn C",22,0,4);
    let staff2:Worker = new Worker(3,"Hà thị B",23,1,6);
    let staff3:Engineer = new Engineer(4,"Nguyễn Việt H",21,2,"Junior");
    Manager.add(staff);
    Manager.add(staff1);
    Manager.add(staff2);
    Manager.add(staff3);
    console.log(Manager.find(1));
    Manager.edit(4,"Lê thị D")
    console.log(Manager.show());
    console.log(Manager.findByName("Đào Ngọc A"))
}

role()

