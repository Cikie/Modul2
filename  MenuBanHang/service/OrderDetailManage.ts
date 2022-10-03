import {Service} from "./Service";
import {OrderDetail} from "../model/OrderDetail";

export class OrderDetailManage implements Service<OrderDetail> {
    listOrderDetail: OrderDetail[] = [];

    add(t: OrderDetail): void {
        this.listOrderDetail.push(t)
    }

    findAll() {
        for (let i = 0; i < this.listOrderDetail.length; i++) {
            console.log(`
            ${this.listOrderDetail[i].customer.Name} ,
             ${this.listOrderDetail[i].showCart()},
              thoi gian: ${this.listOrderDetail[i].time} `);
        }
    }

    findById(id: number): number {
        for (let i = 0; i < this.listOrderDetail.length; i++) {
            if (this.listOrderDetail[i].id == id)
                return i

        }
        return -1;
    }

    remove(id: number) {
        let index = this.findById(id);
        this.listOrderDetail.splice(index, 1)
    }

    update(id: number, t: OrderDetail) {
        let index = this.findById(id);
        this.listOrderDetail[index] = t;
    }

}