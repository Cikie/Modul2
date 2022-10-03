import {Product} from "../Model/Product";
import {ManagerProduct} from "../Manager/ManagerProduct";

let input = require(`readline-sync`);
let productList: ManagerProduct = new ManagerProduct()

function Menu() {
    let menu = `\x1b[36m -----------Quản lý kho----------    \x1b[0m\n
   \x1b[34m 1.Show all Product             \x1b[0m
   \x1b[34m 2.Find product Name            \x1b[0m
   \x1b[34m 3.Add new Product              \x1b[0m
   \x1b[34m 4.Edit product information     \x1b[0m
   \x1b[34m 5.Delete product               \x1b[0m
   \x1b[34m 0.Exit                         \x1b[0m`
    let choice;
    do {
        console.log(menu);
        choice = +input.question('\x1b[1m  Enter your Choice: \x1b[0m');
        switch (choice) {
            case 1:
                showProduct()
                break;
            case 2:
                let selectName = input.question('\x1b[1m  Enter name Product: \x1b[0m')
                findProductByName(selectName)
                break;
            case 3:
                addNewProduct();
                break;
            case 4:
                editProDuct();
                break;
            case 5:
                let selectID = +input.question('\x1b[1m  Enter ID your want to delete:   \x1b[0m')
                removeProduct(selectID)
                break;
        }
    } while (choice != 0)

}

function showProduct() {
    console.log(productList.findAll());
}

function findProductByName(name: string) {
    productList.findByName(name)
}

function removeProduct(id: number) {
    productList.remove(id);
}

function addNewProduct() {
    let id = +input.question("\x1b[34m  Enter Id ProDuct:  \x1b[0m");
    for (let i = 0; i < productList.listProduct.length; i++) {
        if (productList.listProduct[i].id == id) {
            console.log("\x1b[31m    ID already exists !!  \x1b[0m");
            return Menu();
        }
        if (id <= 0) {
            console.log("\x1b[31m  invalid id !!  \x1b[0m");
            return Menu();
        }
    }
    let name = input.question("\x1b[34m     Enter Name ProDuct:  \x1b[0m");
    let sectors = input.question("\x1b[34m  Enter Sectors ProDuct:  \x1b[0m");
    let price = +input.question("\x1b[34m   Enter Price ProDuct:  \x1b[0m");
    if (price <= 0) {
        console.log("\x1b[31m  Invalid price!!  \x1b[0m");
        Menu();
    }
    let amount = +input.question("\x1b[34m  Enter Amount ProDuct:  \x1b[0m");
    if (amount <= 0) {
        console.log("\x1b[31m  Invalid amount!!  \x1b[0m");
       Menu();
    }
    let date = new Date()
    let inForProDuct = input.question("\x1b[34m  Enter InForProDuct:  \x1b[0m");
    let product = new Product(id, name, sectors, price, amount, date, inForProDuct);
    productList.add(product);
}

function editProDuct() {
    let id = +input.question("\x1b[33m  Enter Id ProDuct Update: \x1b[0m")
    if (productList.findById(id) == -1) {
        console.log("\x1b[31m  ID unavailable!! \x1b[0m")
    } else {
        let name = input.question("\x1b[33m     Enter Name ProDuct Update: \x1b[0m");
        let sectors = input.question("\x1b[33m  Enter Sectors ProDuct Update: \x1b[0m");
        let price = +input.question("\x1b[33m   Enter Price ProDuct Update:  \x1b[0m");
        let amount = +input.question("\x1b[33m  Enter Amount ProDuct Update: \x1b[0m");
        let date = input.question("\x1b[33m     Enter Date Product Update:  \x1b[0m");
        let inForProDuct = input.question("\x1b[33m  Enter InForProDuct Update:  \x1b[0m");
        console.log(productList.replate(id, name, sectors, price, amount, date, inForProDuct));
    }
}
Menu();