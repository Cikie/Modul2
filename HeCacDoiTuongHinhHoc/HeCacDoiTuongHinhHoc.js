"use strict";
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
exports.__esModule = true;
exports.Square = exports.Circle = exports.Rectangle = exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this._color = color;
        this._filled = filled;
    }
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "filled", {
        get: function () {
            return this._filled;
        },
        set: function (value) {
            this._filled = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "A Shape with color of "
            + this.color
            + " and "
            + (this.filled ? "filled" : "not filled");
    };
    return Shape;
}());
exports.Shape = Shape;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, height) {
        var _this = _super.call(this, color, filled) || this;
        _this._width = width;
        _this._height = height;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this._height * this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Perimeter", {
        get: function () {
            return 2 * (this._width + this._height);
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.toString = function () {
        return "A Rectangle with width="
            + this.width
            + " and height="
            + this.height
            + ", which is a subclass of "
            + _super.prototype.toString.call(this);
    };
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, filled, radius) {
        var _this = _super.call(this, color, filled) || this;
        _this._radius = radius;
        return _this;
    }
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
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return this._radius * this._radius * Math.PI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "perimeter", {
        get: function () {
            return 2 * this._radius * Math.PI;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Circle.prototype.toString = function () {
        return "A circle with radius = "
            + this._radius + ",which is a subclass of"
            + _super.prototype.toString.call(this);
    };
    return Circle;
}(Shape));
exports.Circle = Circle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        return _super.call(this, color, filled, side, side) || this;
    }
    Square.prototype.getSide = function () {
        return this.width;
    };
    Square.prototype.setSide = function (side) {
        this.setWidth(side);
        this.setLength(side);
    };
    //Override method
    Square.prototype.setWidth = function (width) {
        this.setSide(width);
    };
    //Override method
    Square.prototype.setLength = function (length) {
        this.setSide(length);
    };
    //Override method
    Square.prototype.toString = function () {
        return "A Square with side="
            + this.getSide()
            + ", which is a subclass of "
            + _super.prototype.toString.call(this);
    };
    return Square;
}(Rectangle));
exports.Square = Square;
