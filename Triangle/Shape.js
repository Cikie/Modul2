"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(side1, side2, side3) {
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }
    Object.defineProperty(Shape.prototype, "side1", {
        get: function () {
            return this._side1;
        },
        set: function (value) {
            this._side1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "side2", {
        get: function () {
            return this._side2;
        },
        set: function (value) {
            this._side2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "side3", {
        get: function () {
            return this._side3;
        },
        set: function (value) {
            this._side3 = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
exports.Shape = Shape;
