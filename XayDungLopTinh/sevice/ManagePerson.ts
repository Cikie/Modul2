import {Manage} from "./Manage";
import {People} from "../Model/People";
import {City} from "../Model/City";

export class ManagePerson implements Manage<People>{
    personList:People[] = []
    add(t: People) {
        this.personList.push(t);
    }

    findAll() {
        for (let i = 0; i < this.personList.length; i++) {
            console.log("STT: " + (i + 1) + ", " + this.personList[i].name + ", " + this.personList[i].age + ", ở " + this.personList[i].city.name);
        }
    }

    findById(id: number): People {
        return new People(1,'1',2,new City(0,''));
    }

    findByIndex(index: number): People {
        return new People(2,'2',2,new City(0,''));
    }

}