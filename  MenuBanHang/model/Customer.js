"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(Name, id) {
        this._Name = Name;
        this._id = id;
    }
    Object.defineProperty(Customer.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (value) {
            this._Name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
