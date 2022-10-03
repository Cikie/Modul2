"use strict";
exports.__esModule = true;
exports.Students = void 0;
var Students = /** @class */ (function () {
    function Students(name, score) {
        this._name = name;
        this._score = score;
    }
    Object.defineProperty(Students.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    return Students;
}());
exports.Students = Students;
