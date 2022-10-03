"use strict";
exports.__esModule = true;
exports.ManagerProduct = void 0;
var ManagerProduct = /** @class */ (function () {
    function ManagerProduct() {
        this.listProduct = [];
    }
    ManagerProduct.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    ManagerProduct.prototype.findAll = function () {
        if (this.listProduct.length == 0) {
            console.log("\u001B[31m  List Product is Emty  \u001B[0m");
        }
        else {
            return this.listProduct;
        }
    };
    ManagerProduct.prototype.findByName = function (name) {
        var listNameProduct = this.listProduct.filter((function (item) {
            return item.name.toUpperCase().includes(name.toUpperCase());
        }));
        if (listNameProduct.length == 0) {
            console.log("\u001B[31m  This Product name not Found !  \u001B[0m");
        }
        else {
            console.log(listNameProduct);
        }
    };
    ManagerProduct.prototype.findById = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManagerProduct.prototype.remove = function (id) {
        var index = this.findById(id);
        this.listProduct.splice(index, 1);
        console.log('\x1b[32m  Da xoa thanh cong \x1b[0m');
    };
    ManagerProduct.prototype.replate = function (id, name, type, price, amount, date, detail) {
        var index = this.findById(id);
        var today = new Date();
        today.getDay();
        if (index == -1) {
            return '\x1b[31m  ID is Found  \x1b[0m';
        }
        else {
            if (name)
                this.listProduct[index].name = name;
            if (type)
                this.listProduct[index].type = type;
            if (price)
                this.listProduct[index].price = price;
            if (amount)
                this.listProduct[index].amount = amount;
            if (date)
                this.listProduct[index].date;
            if (detail)
                this.listProduct[index].detail = detail;
            return '\x1b[1m  Done\x1b  [0m';
        }
    };
    return ManagerProduct;
}());
exports.ManagerProduct = ManagerProduct;
