"use strict";
exports.__esModule = true;
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(data) {
        this.next = null;
        this.data = data;
    }
    Data.prototype.readData = function () {
        return this.data;
    };
    return Data;
}());
exports.Data = Data;
