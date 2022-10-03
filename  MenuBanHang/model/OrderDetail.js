"use strict";
exports.__esModule = true;
exports.OrderDetail = void 0;
var OrderDetail = /** @class */ (function () {
    // private _sumPrice:number
    function OrderDetail(id, customer, time) {
        this._cart = [];
        this._id = id;
        this._customer = customer;
        this._time = time;
        // this._sumPrice = sumPrice;
    }
    OrderDetail.prototype.add = function (product) {
        this.cart.push(product);
    };
    Object.defineProperty(OrderDetail.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetail.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (value) {
            this._customer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetail.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetail.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (value) {
            this._cart = value;
        },
        enumerable: false,
        configurable: true
    });
    // get sumPrice(): number {
    //     return this._sumPrice;
    // }
    //
    // set sumPrice(value: number) {
    //     this._sumPrice = value;
    // }
    OrderDetail.prototype.showCart = function () {
        var str = "";
        this._cart.forEach(function (item) {
            str += "".concat(item.name, ", SL: ").concat(item.quantity);
        });
        return str;
    };
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
