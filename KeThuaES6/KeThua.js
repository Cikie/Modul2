//Kế thừa là cơ chế cho phép một lớp thừa hưởng các thuộc tính và phương thức của một lớp khác đã được định nghĩa trước đó.
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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, seat) {
        this._name = name;
        this._seat = seat;
    }
    Object.defineProperty(Vehicle.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "getSeat", {
        get: function () {
            return this._seat;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
// Cho lớp Taxi kế thừa lớp Vehicle
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi(name, seat, licensePlate) {
        var _this = _super.call(this, name, seat) || this;
        _this.licensePlate = licensePlate;
        return _this;
    }
    Object.defineProperty(Taxi.prototype, "getLicensePlate", {
        get: function () {
            return this.licensePlate;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}(Vehicle));
var taxi = new Taxi('Vios 2020', 4, '34A-9999');
console.log(taxi.getName);
console.log(taxi.getLicensePlate);
