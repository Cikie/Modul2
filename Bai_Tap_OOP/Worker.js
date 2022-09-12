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
exports.Worker = void 0;
var KeyManager_1 = require("./KeyManager");
var Level;
(function (Level) {
    Level[Level["lv1"] = 0] = "lv1";
    Level[Level["lv2"] = 1] = "lv2";
    Level[Level["lv3"] = 2] = "lv3";
    Level[Level["lv4"] = 3] = "lv4";
    Level[Level["lv5"] = 4] = "lv5";
    Level[Level["lv6"] = 5] = "lv6";
    Level[Level["lv7"] = 6] = "lv7";
    Level[Level["lv8"] = 7] = "lv8";
    Level[Level["lv9"] = 8] = "lv9";
    Level[Level["lv10"] = 9] = "lv10";
})(Level || (Level = {}));
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(id, fullName, age, genDer, level) {
        var _this = _super.call(this, id, fullName, age, genDer) || this;
        _this._level = level;
        return _this;
    }
    Object.defineProperty(Worker.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: false,
        configurable: true
    });
    return Worker;
}(KeyManager_1.KeyManager));
exports.Worker = Worker;
