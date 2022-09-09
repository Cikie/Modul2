"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
exports.Animal = Animal;
var Tigers_1 = require("./Tigers");
var Chicken_1 = require("./Chicken");
var animal = [];
animal[0] = new Tigers_1.Tigers();
animal[1] = new Chicken_1.Chicken();
animal.forEach(function (item, index) {
    console.log(item.makeSound());
});
