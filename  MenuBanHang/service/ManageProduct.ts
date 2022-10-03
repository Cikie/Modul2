import {Product} from "../model/Product";
import {Service} from "./Service";

export class ManageProduct implements Service<Product> {
    productList: Product[] = []

    add(t: Product) {
        this.productList.push(t)
    }

    findAll() {
      return this.productList;
    }

    findById(id: number): number {
        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id == id)
                return i

        }
        return -1;
    }

    remove(id: number) {
        let index = this.findById(id);
        this.productList.splice(index, 1)
    }

    update(id: number, t: Product) {
        let index = this.findById(id);
        this.productList[index] = t
    }

    findByProductId(id: number): Product {
        let index = this.findById(id);
        return this.productList[index];
    }
}
