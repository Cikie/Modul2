"use strict";
exports.__esModule = true;
exports.ManageProduct = void 0;
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.productList = [];
    }
    ManageProduct.prototype.add = function (t) {
        this.productList.push(t);
    };
    ManageProduct.prototype.findAll = function () {
        return this.productList;
    };
    ManageProduct.prototype.findById = function (id) {
        for (var i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id == id)
                return i;
        }
        return -1;
    };
    ManageProduct.prototype.remove = function (id) {
        var index = this.findById(id);
        this.productList.splice(index, 1);
    };
    ManageProduct.prototype.update = function (id, t) {
        var index = this.findById(id);
        this.productList[index] = t;
    };
    ManageProduct.prototype.findByProductId = function (id) {
        var index = this.findById(id);
        return this.productList[index];
    };
    return ManageProduct;
}());
exports.ManageProduct = ManageProduct;
