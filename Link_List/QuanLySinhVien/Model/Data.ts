import {Students} from "./Class_SV";

export class Data<Students> {
    data: Students ;
    next: Data<Students> | null = null

    constructor(data: Students) {
        this.data = data
    }
    readData():Students{
        return this.data
    }
}