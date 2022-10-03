"use strict";
exports.__esModule = true;
exports.OrderDetailManage = void 0;
var OrderDetailManage = /** @class */ (function () {
    function OrderDetailManage() {
        this.listOrderDetail = [];
    }
    OrderDetailManage.prototype.add = function (t) {
        this.listOrderDetail.push(t);
    };
    OrderDetailManage.prototype.findAll = function () {
        for (var i = 0; i < this.listOrderDetail.length; i++) {
            console.log("\n            ".concat(this.listOrderDetail[i].customer.Name, " ,\n             ").concat(this.listOrderDetail[i].showCart(), ",\n              thoi gian: ").concat(this.listOrderDetail[i].time, " "));
        }
    };
    OrderDetailManage.prototype.findById = function (id) {
        for (var i = 0; i < this.listOrderDetail.length; i++) {
            if (this.listOrderDetail[i].id == id)
                return i;
        }
        return -1;
    };
    OrderDetailManage.prototype.remove = function (id) {
        var index = this.findById(id);
        this.listOrderDetail.splice(index, 1);
    };
    OrderDetailManage.prototype.update = function (id, t) {
        var index = this.findById(id);
        this.listOrderDetail[index] = t;
    };
    return OrderDetailManage;
}());
exports.OrderDetailManage = OrderDetailManage;
