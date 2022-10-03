class StopWatch {
    private _startTime;
    private _endTime;

    constructor(startTime, endTime) {
        this._startTime = startTime;
        this._endTime = endTime;
    }

    get startTime() {
        return this._startTime = new Date().toLocaleTimeString("en-US");
    }

    get endTime() {
        return this._endTime = new Date().toLocaleTimeString("en-Us");
    }
    getElapsedTime() {
        // return this.endTime() - this.startTime()
    }
}
