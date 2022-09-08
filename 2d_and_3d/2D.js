var point2d = /** @class */ (function () {
    function point2d(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(point2d.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(point2d.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    point2d.prototype.getxy = function () {
        return {
            x: this._x,
            y: this._y
        };
    };
    point2d.prototype.setxy = function (x, y) {
        this._x = x;
        this._y = y;
    };
    return point2d;
}());
var Point2d = new point2d(2, 6);
console.log(Point2d.getxy());
