"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Triangle = void 0;
var Shape_1 = require("./Shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(side1, side2, side3, name, color) {
        var _this = _super.call(this, side1, side2, side3) || this;
        _this._name = name;
        _this._color = color;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "Area", {
        get: function () {
            var p = (this._side1 + this._side2 + this._side3) / 2;
            return Math.sqrt(p * (p - this._side1) * (p - this._side2) * (p - this._side3));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "Parameter", {
        get: function () {
            return this._side1 + this._side2 + this._side3;
        },
        enumerable: false,
        configurable: true
    });
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
var triangle = new Triangle(3, 4, 5, "triangle", "red");
console.log(triangle.Area);
// console.log(triangle.Parameter)
