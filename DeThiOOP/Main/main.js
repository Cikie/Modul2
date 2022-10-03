"use strict";
exports.__esModule = true;
var Product_1 = require("../Model/Product");
var ManagerProduct_1 = require("../Manager/ManagerProduct");
var input = require("readline-sync");
var productList = new ManagerProduct_1.ManagerProduct();
function Menu() {
    var menu = "\u001B[36m -----------Qu\u1EA3n l\u00FD kho----------    \u001B[0m\n\n   \u001B[34m 1.Show all Product             \u001B[0m\n   \u001B[34m 2.Find product Name            \u001B[0m\n   \u001B[34m 3.Add new Product              \u001B[0m\n   \u001B[34m 4.Edit product information     \u001B[0m\n   \u001B[34m 5.Delete product               \u001B[0m\n   \u001B[34m 0.Exit                         \u001B[0m";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('\x1b[1m  Enter your Choice: \x1b[0m');
        switch (choice) {
            case 1:
                showProduct();
                break;
            case 2:
                var selectName = input.question('\x1b[1m  Enter name Product: \x1b[0m');
                findProductByName(selectName);
                break;
            case 3:
                addNewProduct();
                break;
            case 4:
                editProDuct();
                break;
            case 5:
                var selectID = +input.question('\x1b[1m  Enter ID your want to delete:   \x1b[0m');
                removeProduct(selectID);
                break;
        }
    } while (choice != 0);
}
function showProduct() {
    console.log(productList.findAll());
}
function findProductByName(name) {
    productList.findByName(name);
}
function removeProduct(id) {
    // let id = +input.question('Nhap vao ID: ')
    productList.remove(id);
}
function addNewProduct() {
    // let id = +input.question('\x1b[33m  Enter product ID: \x1b[0m')
    // if (id != -1) {
    //     let name =    input.question('\x1b[33m  Enter product Name: \x1b[0m')
    //     let type =    input.question('\x1b[33m  Enter product type: \x1b[0m')
    //     let price =  +input.question('\x1b[33m  Enter product Price: \x1b[0m')
    //     let amount = +input.question('\x1b[33m  Enter product Amount:  \x1b[0m')
    //     let date =   +input.question('\x1b[33m  Enter Date:  \x1b[0m')
    //     let detail =  input.question('\x1b[33m  Enter product Information:  \x1b[0m')
    //
    //     let product = new Product(id, name, type, price, amount, date, detail)
    //     productList.add(product)
    // } else {
    //     console.log('\x1b[31m  Id is not Invalid  \x1b[0m')
    // }
    var id = +input.question("Enter Id ProDuct: ");
    for (var i = 0; i < productList.listProduct.length; i++) {
        if (productList.listProduct[i].id == id) {
            console.log("id already exists !!");
            return Menu();
        }
        if (id <= 0) {
            console.log("invalid id !!");
            return Menu();
        }
    }
    var name = input.question("Enter Name ProDuct: ");
    var sectors = input.question("Enter Sectors ProDuct: ");
    var price = +input.question("Enter Price ProDuct: ");
    if (price <= 0) {
        console.log("Invalid price!!");
        Menu();
    }
    var amount = +input.question("Enter Amount ProDuct: ");
    if (amount <= 0) {
        console.log("Invalid amount!!");
        Menu();
    }
    var date = new Date();
    var inForProDuct = input.question("Enter InForProDuct:  ");
    var product = new Product_1.Product(id, name, sectors, price, amount, date, inForProDuct);
    productList.add(product);
}
// function replateProduct() {
//     let id = +input.question('\x1b[1m  Enter product ID: \x1b[0m')
//     let idUpdate = productList.findById(id);
//     if (idUpdate == -1) {
//         console.log('\x1b[31m  ID not Found  \x1b[0m')
//     } else {
//         let name =   input.question('\x1b[33m  Enter product Name : \x1b[0m')
//         let type =   input.question('\x1b[33m  Enter product Type : \x1b[0m')
//         let price = +input.question('\x1b[33m  Enter product Price : \x1b[0m')
//         let amount =+input.question('\x1b[33m  Enter product Amount : \x1b[0m')
//         let date =  +input.question('\x1b[33m  Enter Date :            \x1b[0m')
//         let detail = input.question('\x1b[33m  Enter product information : \x1b[0m')
//
//         productList.replate(id, name, type, price, amount, date, detail);
//     }
// }
function editProDuct() {
    var id = +input.question("Enter Id ProDuct Update: ");
    if (productList.findById(id) == -1) {
        console.log("id unavailable");
    }
    else {
        var name_1 = input.question("Enter Name ProDuct Update");
        var sectors = input.question("Enter Sectors ProDuct Update");
        var price = +input.question("Enter Price ProDuct Update");
        var amount = +input.question("Enter Amount ProDuct Update");
        var date = input.question("Enter Date Product Update");
        var inForProDuct = input.question("Enter InForProDuct Update");
        // let product = new Product(id,name,sectors,price,amount,date,inForProDuct);
        console.log(productList.replate(id, name_1, sectors, price, amount, date, inForProDuct));
    }
}
Menu();
