//Ghi đè phương thức là quá trình viết lại một phương thức cùng tên và các tham số trong lớp con.
//
// Ghi đè phương thức rất hữu ích khi lớp con muốn sửa đổi hành vi của lớp cha cho một số tác vụ nhất định.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(this.name + " eats when hungry");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(rollnumber, name1) {
        var _this = _super.call(this) || this;
        _this.rollnumber = rollnumber;
        _this.name = name1;
        return _this;
    }
    Student.prototype.displayInFormation = function () {
        console.log("Name : " + this.name + ",Roll number :" + this.rollnumber);
    };
    Student.prototype.eat = function () {
        console.log(this.name + "eats during break. ");
    };
    return Student;
}(Person));
var student1 = new Student(2, "Rohit");
console.log(student1.displayInFormation());
console.log(student1.eat());
