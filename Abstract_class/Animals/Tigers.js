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
exports.Tigers = void 0;
var Class_Animal_1 = require("./Class_Animal");
var Tigers = /** @class */ (function (_super) {
    __extends(Tigers, _super);
    function Tigers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tigers.prototype.makeSound = function () {
        return "Tiger: Roarrrr";
    };
    return Tigers;
}(Class_Animal_1.Animal));
exports.Tigers = Tigers;