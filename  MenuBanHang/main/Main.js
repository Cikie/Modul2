"use strict";
exports.__esModule = true;
var ManageProduct_1 = require("../service/ManageProduct");
var ManageCustomer_1 = require("../service/ManageCustomer");
var OrderDetailManage_1 = require("../service/OrderDetailManage");
var Customer_1 = require("../model/Customer");
var Product_1 = require("../model/Product");
var OrderDetail_1 = require("../model/OrderDetail");
var listProduct = new ManageProduct_1.ManageProduct();
var listCustomer = new ManageCustomer_1.ManageCustomer();
var listOrder = new OrderDetailManage_1.OrderDetailManage();
var input = require("readline-sync");
function Mainmenu() {
    var menu = "------ Menu Chinh------\n\n    1.Them,Sua,Xoa san pham\n    2.Them Khach Hang\n    3.Mua San Pham";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap Vao Lua Chon : ');
        switch (choice) {
            case 1:
                showMenuProduct();
                break;
            case 2:
                addCustomer();
                break;
            case 3:
                buyProduct();
                break;
        }
    } while (choice != 0);
}
function addCustomer() {
    var id = +input.question('Nhap Vao ID Khach: ');
    var name = input.question('Nhap Vao Ten Khach: ');
    listCustomer.add(new Customer_1.Customer(name, id));
}
function showMenuProduct() {
    var menu = "-----Menu Product----\n\n    1.Them\n    2.Xoa\n    3.Sua\n    4.Hien Thi\n    0.Thoat";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon vao : ');
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                var selectProductID = +input.question('vui long nhap id: ');
                removeProduct(selectProductID);
                break;
            case 3:
                break;
            case 4:
                showListProduct();
                break;
        }
    } while (choice != 0);
}
function removeProduct(id) {
    listProduct.remove(id);
}
function addProduct() {
    var id = +input.question('Nhap vao ID san Pham : ');
    var name = input.question('Nhap vao Ten san Pham : ');
    var quatity = +input.question('Nhap vao So Luong san Pham : ');
    var price = +input.question('Nhap vao Gia Tien san Pham : ');
    var product = new Product_1.Product(id, name, quatity, price);
    listProduct.add(product);
}
function showListProduct() {
    console.log(listProduct.findAll());
}
function buyProduct() {
    var id = +input.question('Nhap ID khach hang: ');
    for (var i = 0; i < listProduct.productList.length; i++) {
        console.log("\n        ID: ".concat(listProduct.productList[i].id, "\n          Name: ").concat(listProduct.productList[i].name, "\n            Quatity ").concat(listProduct.productList[i].quantity, "\n              Price ").concat(listProduct.productList[i].price));
    }
    var idOrder = +input.question('Nhap ID hoa don : ');
    var idProduct = +input.question('Nhap ID San Pham : ');
    var product = listProduct.findByProductId(id);
    var amount = +input.question('Nhap vao so luong can mua: ');
    listProduct.update(idProduct, new Product_1.Product(product.id, product.name, product.quantity - amount, product.price));
    var customer = listCustomer.findByCustomerId(id);
    var time = new Date();
    var today = "".concat(time.getDate(), "/").concat(time.getMonth() + 1);
    product.quantity = amount;
    var orderDetail = new OrderDetail_1.OrderDetail(id, customer, today);
    var sumPrice = product.price * amount;
    orderDetail.add(product);
    listOrder.add(orderDetail);
    listOrder.findAll();
    console.log("Tong Bill: ".concat(sumPrice));
}
Mainmenu();
