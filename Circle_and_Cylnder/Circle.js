var Circle = /** @class */ (function () {
    function Circle(color, filled, radius) {
        this._color = color;
        this._filled = filled;
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "filled", {
        get: function () {
            return this._filled;
        },
        set: function (value) {
            this._filled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
