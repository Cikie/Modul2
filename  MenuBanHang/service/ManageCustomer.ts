import {Service} from "./Service";
import {Customer} from "../model/Customer";

export class ManageCustomer implements Service<Customer>{
    customerList:Customer[] = [];


    add(t: Customer): void {
        this.customerList.push(t)
    }

    findAll(): void {
        for (let i = 0; i < this.customerList.length; i++) {
            console.log("STT: "+(i+1)+", "+this.customerList[i].Name);
        }
    }

    findById(id: number): number {
        for (let i = 0; i < this.customerList.length; i++) {
            if (this.customerList[i].id ==id)
                return i
            
        }
        return -1;
    }

    remove(id: number):void {
        let index = this.findById(id);
        this.customerList.splice(index,1)
    }

    update(id: number, t: Customer) {
    }

    findByCustomerId(id:number): Customer{
        let index = this.findById(id);
        return this.customerList[index];
    }
}