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
var HeCacDoiTuongHinhHoc_1 = require("../HeCacDoiTuongHinhHoc/HeCacDoiTuongHinhHoc");
var Cylynder = /** @class */ (function (_super) {
    __extends(Cylynder, _super);
    function Cylynder(color, filled, radius, height) {
        var _this = _super.call(this, color, filled, radius) || this;
        _this._height = height;
        return _this;
    }
    Object.defineProperty(Cylynder.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylynder.prototype, "thisNum", {
        get: function () {
            return Math.PI * Math.pow(this.radius, 2) * this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Cylynder;
}(HeCacDoiTuongHinhHoc_1.Circle));
var cylender = new Cylynder("red", true, 3, 5);
console.log(cylender.thisNum);
