import {Customer} from "./Customer";
import {Product} from "./Product";

export class OrderDetail {
    private _id: number;
    private _customer: Customer;
    private _time: string;
    private _cart: Product[] = [];
    // private _sumPrice:number


    constructor(id: number, customer: Customer, time: string) {
        this._id = id;
        this._customer = customer;
        this._time = time;
        // this._sumPrice = sumPrice;
    }

    add(product:Product){
        this.cart.push(product)
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get customer(): Customer {
        return this._customer;
    }

    set customer(value: Customer) {
        this._customer = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    get cart(): Product[] {
        return this._cart;
    }

    set cart(value: Product[]) {
        this._cart = value;
    }
    // get sumPrice(): number {
    //     return this._sumPrice;
    // }
    //
    // set sumPrice(value: number) {
    //     this._sumPrice = value;
    // }

    showCart(){
        let str = ``;
        this._cart.forEach((item)=>{
            str += `${item.name}, SL: ${item.quantity}`
        })
        return str
    }
}