"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Data_1 = require("../Model/Data");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirst = function (data) {
        var node = new Data_1.Data(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLast = function (data) {
        if (!this.head) {
            this.insertFirst(data);
        }
        else {
            var node = new Data_1.Data(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.showList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode != null) {
            listData.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return listData;
    };
    LinkedList.prototype.totalStudentsFail = function () {
        var listdata = this.showList();
        var total = 0;
        for (var i = 0; i < listdata.length; i++) {
            if (listdata[i].score < 5) {
                total++;
            }
        }
        return "There are ".concat(total, " students fail");
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
