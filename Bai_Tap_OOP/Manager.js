"use strict";
exports.__esModule = true;
var Staff_1 = require("./Staff");
var Engineer_1 = require("./Engineer");
var Worker_1 = require("./Worker");
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.add = function (staff) {
        this.list.push(staff);
    };
    Manager.show = function () {
        return this.list;
    };
    Manager.find = function (ID) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].ID === ID) {
                return i;
            }
        }
        return -1;
    };
    Manager.edit = function (ID, fullName) {
        var index = this.find(ID);
        for (var i = 0; i < this.list.length; i++) {
            if (index == i) {
                this.list[i].fullName = fullName;
            }
        }
    };
    Manager.findByName = function (fullName) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].fullName == fullName) {
                return this.list[i];
            }
        }
    };
    Manager.list = [];
    return Manager;
}());
function role() {
    var staff = new Engineer_1.Engineer(1, "Đào Ngọc A", 26, 0, "Senior");
    var staff1 = new Staff_1.Staff(2, "Nguyễn Văn C", 22, 0, 4);
    var staff2 = new Worker_1.Worker(3, "Hà thị B", 23, 1, 6);
    var staff3 = new Engineer_1.Engineer(4, "Nguyễn Việt H", 21, 2, "Junior");
    Manager.add(staff);
    Manager.add(staff1);
    Manager.add(staff2);
    Manager.add(staff3);
    // console.log(Manager.find(1));
    // Manager.edit(4,"Lê thị D")
    // console.log(Manager.show());
    console.log(Manager.findByName("Đào Ngọc A"));
}
role();
