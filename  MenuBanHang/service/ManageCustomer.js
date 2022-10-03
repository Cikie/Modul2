"use strict";
exports.__esModule = true;
exports.ManageCustomer = void 0;
var ManageCustomer = /** @class */ (function () {
    function ManageCustomer() {
        this.customerList = [];
    }
    ManageCustomer.prototype.add = function (t) {
        this.customerList.push(t);
    };
    ManageCustomer.prototype.findAll = function () {
        for (var i = 0; i < this.customerList.length; i++) {
            console.log("STT: " + (i + 1) + ", " + this.customerList[i].Name);
        }
    };
    ManageCustomer.prototype.findById = function (id) {
        for (var i = 0; i < this.customerList.length; i++) {
            if (this.customerList[i].id == id)
                return i;
        }
        return -1;
    };
    ManageCustomer.prototype.remove = function (id) {
        var index = this.findById(id);
        this.customerList.splice(index, 1);
    };
    ManageCustomer.prototype.update = function (id, t) {
    };
    ManageCustomer.prototype.findByCustomerId = function (id) {
        var index = this.findById(id);
        return this.customerList[index];
    };
    return ManageCustomer;
}());
exports.ManageCustomer = ManageCustomer;
