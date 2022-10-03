var StopWatch = /** @class */ (function () {
    function StopWatch(startTime, endTime) {
        this._startTime = startTime;
        this._endTime = endTime;
    }
    Object.defineProperty(StopWatch.prototype, "startTime", {
        get: function () {
            return this._startTime = new Date().toLocaleTimeString("en-US");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StopWatch.prototype, "endTime", {
        get: function () {
            return this._endTime = new Date().toLocaleTimeString("en-Us");
        },
        enumerable: false,
        configurable: true
    });
    StopWatch.prototype.getElapsedTime = function () {
        return this.endTime() - this.startTime();
    };
    return StopWatch;
}());
