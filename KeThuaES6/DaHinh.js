// Trong lập trình hướng đối tượng, tính đa hình đề cập đến khả năng tham chiếu đến một lớp dẫn xuất theo kiểu của lớp cha.
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
var box = /** @class */ (function () {
    function box(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    box.prototype.volume = function () {
        return this.length * this.width * this.height;
    };
    return box;
}());
var BoxWeight = /** @class */ (function (_super) {
    __extends(BoxWeight, _super);
    function BoxWeight(length, width, height, depth) {
        var _this = _super.call(this, length, width, height) || this;
        _this.depth = depth;
        return _this;
    }
    BoxWeight.prototype.volume = function () {
        return _super.prototype.volume.call(this) * this.depth;
    };
    return BoxWeight;
}(box));
var boxObj;
boxObj = new BoxWeight(10, 20, 30, 40);
