"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Class_1 = require("../Model/Class");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new Class_1.Note1(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Class_1.Note1(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.readList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
