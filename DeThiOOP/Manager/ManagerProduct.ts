import {Manager} from "./Manager";
import {Product} from "../Model/Product";

export class ManagerProduct implements Manager<Product> {
    listProduct: Product[] = []

    add(t: Product) {
        this.listProduct.push(t)
    }

    findAll() {
        if (this.listProduct.length == 0) {
            console.log(`\x1b[31m  List Product is Emty  \x1b[0m`)
        } else {
            return this.listProduct
        }
    }

    findByName(name: string) {
        let listNameProduct = this.listProduct.filter((item =>
            item.name.toUpperCase().includes(name.toUpperCase())))
        if (listNameProduct.length == 0) {
            console.log(`\x1b[31m  This Product name not Found !  \x1b[0m`)
        } else {
            console.log(listNameProduct)
        }
    }

    findById(id: number) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return i
            }
        }
        return -1
    }

    remove(id: number): void {
        let index = this.findById(id)
        this.listProduct.splice(index, 1)
        console.log('\x1b[32m  Product is Delete \x1b[0m')
    }

    replate(id: number, name?: string, type?: string, price?: number, amount?: number, date?: number, detail?: string) {
        let index = this.findById(id)
        let today = new Date()
        today.getDay()
        if (index == -1) {
            return '\x1b[31m  ID is not Found!!  \x1b[0m'
        } else {
            if (name) this.listProduct[index].name = name;
            if (type) this.listProduct[index].type = type;
            if (price) this.listProduct[index].price = price;
            if (amount) this.listProduct[index].amount = amount;
            if (date) this.listProduct[index].date
            if (detail) this.listProduct[index].detail = detail;
            return '\x1b[1m  Done Replate !! \x1b[0m'
        }
    }

}


