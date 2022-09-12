"use strict";
exports.__esModule = true;
exports.KeyManager = void 0;
var KeyManager = /** @class */ (function () {
    function KeyManager(ID, fullName, age, genDer) {
        this._ID = ID;
        this._fullName = fullName;
        this._age = age;
        this._genDer = genDer;
    }
    Object.defineProperty(KeyManager.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyManager.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyManager.prototype, "genDer", {
        get: function () {
            return this._genDer;
        },
        set: function (value) {
            this._genDer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyManager.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (value) {
            this._ID = value;
        },
        enumerable: false,
        configurable: true
    });
    return KeyManager;
}());
exports.KeyManager = KeyManager;
