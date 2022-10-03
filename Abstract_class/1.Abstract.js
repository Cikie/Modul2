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
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes ").concat(this.getSalary(), " a month.");
    };
    return Employee;
}());
var FulltimeEmployee = /** @class */ (function (_super) {
    __extends(FulltimeEmployee, _super);
    function FulltimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FulltimeEmployee.prototype.getSalary = function () {
        return 0;
    };
    return FulltimeEmployee;
}(Employee));
var Contructor = /** @class */ (function (_super) {
    __extends(Contructor, _super);
    function Contructor(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contructor.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return Contructor;
}(Employee));
var john = new FulltimeEmployee('John', 'Dee', 20022);
var jane = new Contructor('Jane', 'Dee', 200, 24);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
