export class Note1<T> {
    data: T;
    next:Note1<T> | null = null;

    constructor(data:T) {
        this.data = data;
    }
    readData ():T {
        return this.data
    }
}