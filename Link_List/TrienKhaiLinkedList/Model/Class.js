"use strict";
exports.__esModule = true;
exports.Note1 = void 0;
var Note1 = /** @class */ (function () {
    function Note1(data) {
        this.next = null;
        this.data = data;
    }
    Note1.prototype.readData = function () {
        return this.data;
    };
    return Note1;
}());
exports.Note1 = Note1;
