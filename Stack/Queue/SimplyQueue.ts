export class SimplyQueue<T>{
    container:T[] = [];
    constructor() {
    }
    enqueue():T | undefined{
        return this.container.shift();
    }
    size():number{
        return this.container.length;
    }
}