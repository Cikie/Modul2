"use strict";
exports.__esModule = true;
exports.HouseHold = void 0;
var HouseHold = /** @class */ (function () {
    function HouseHold(id, address) {
        this.listPerson = [];
        this._id = id;
        this._address = address;
    }
    Object.defineProperty(HouseHold.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HouseHold.prototype, "member", {
        get: function () {
            return this._member;
        },
        set: function (value) {
            this._member = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HouseHold.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    HouseHold.prototype.add = function (t) {
        this.listPerson.push(t);
        this._member++;
    };
    HouseHold.prototype.edit = function (id, t) {
    };
    HouseHold.prototype.findAll = function () {
    };
    HouseHold.prototype.findById = function (id) {
    };
    HouseHold.prototype.findByNameNinh = function () {
        for (var i = 0; i < this.listPerson.length; i++) {
            if (this.listPerson[i].name == 'Ninh') {
                console.log(this);
            }
        }
    };
    return HouseHold;
}());
exports.HouseHold = HouseHold;
