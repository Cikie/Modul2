import {Manage} from "./Manage";
import {City} from "../Model/City";

export class ManagerCity implements Manage<City> {
    cityManage: City[] = [];
    constructor() {
        this.cityManage.push(new City(1,'Hà Nội'));
        this.cityManage.push(new City(2,'Hải Phòng'));
        this.cityManage.push(new City(3,'Quảng Ninh'));
        this.cityManage.push(new City(4,'Thái Bình '));
        this.cityManage.push(new City(5,'Thanh Hóa'));
    }
    add(t: City) {
        this.cityManage.push(t);
    }

    findAll() {
        for (let i = 0; i < this.cityManage.length; i++) {
            console.log(`Stt${this.cityManage[i].id} Name ${this.cityManage[i].name}`);
        }
    }

    findById(id: number): City {
        for (let i = 0; i <this.cityManage.length ; i++) {
            if(this.cityManage[i].id == id){
                return this.cityManage[i];
            }
        }
        return new City(0,'');
    }

    findByIndex(index: number): City {
        return this.cityManage[index];
    }

}