"use strict";
exports.__esModule = true;
exports.Street = void 0;
var Street = /** @class */ (function () {
    function Street(id, name) {
        this.listHouseHold = [];
        this.id = id;
        this.name = name;
    }
    Street.prototype.add = function (t) {
        this.listHouseHold.push(t);
    };
    Street.prototype.edit = function (id, t) {
    };
    Street.prototype.findAll = function () {
        return this.listHouseHold;
    };
    Street.prototype.findById = function (id) {
    };
    Street.prototype.findByIndex = function (index) {
        return this.listHouseHold[index];
    };
    Street.prototype.findMemberThan2 = function () {
        var listHouseHoldMoreThan2 = [];
        for (var i = 0; i < this.listHouseHold.length; i++) {
            if (this.listHouseHold.length >= 2) {
                listHouseHoldMoreThan2.push(this.listHouseHold[i]);
            }
        }
        return listHouseHoldMoreThan2;
    };
    Street.prototype.findA = function () {
        if (this.name == 'A') {
            for (var i = 0; i < this.listHouseHold.length; i++) {
                this.listHouseHold[i].findByNameNinh();
            }
        }
    };
    return Street;
}());
exports.Street = Street;
