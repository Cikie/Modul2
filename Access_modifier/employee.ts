import {Staff} from "./QuanLyNhanSu";

export class employeeManager {
    static list: Staff[] = [];

    constructor() {
    }

    static add(staff: Staff) {
        this.list.push(staff);
    }

    static show() {
        return this.list
    }

    static delete(id: number) {
        this.list.splice(id, 1);
    }

    static find(id: number): number {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].ID == id) {
                return i;
            }
        }
        return -1
    }

    static deleteByFilter(ID: number) {
        {
            this.list = this.list.filter((item) => {
                return item.ID != ID
            })
        }
    }
    static edit(id: number, name: string) {
        let index = this.find(id)
        for (let i = 0; i < this.list.length; i++) {
            if (index == i) {
                this.list[i].name = name
            }
        }
    }
}