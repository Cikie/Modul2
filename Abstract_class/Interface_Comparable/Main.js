"use strict";
exports.__esModule = true;
var ComparableCircle_1 = require("./ComparableCircle");
var circle = [];
circle[0] = new ComparableCircle_1.ComparableCircle(10);
circle[1] = new ComparableCircle_1.ComparableCircle(20);
circle[2] = new ComparableCircle_1.ComparableCircle(30);
var result = circle[1].compareTo(circle[2]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
