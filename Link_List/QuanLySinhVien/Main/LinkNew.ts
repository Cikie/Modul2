import {Students} from "../Model/Class_SV";
import {Data} from "../Model/Data";

export class LinkedList<Students> {
    head: Data<Students> | null
    tail: Data<Students> | null
    size: number

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(data:Students){
        let node = new Data(data)
        node.next = this.head;
        this.head = node;
        if (!this.tail){
            this.tail = node
        }
        this.size++
    }
    insertLast(data:Students){
        if (!this.head){
            this.insertFirst(data)
        }else{
            let node = new Data(data)
            this.tail.next = node;
            this.tail = node;
            this.size++
        }
    }
    getSize():number{
        return this.size;
    }
    showList(): Students[]{
        let listData = [];
        let currentNode = this.head;

        while (currentNode != null){
            listData.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return listData;
    }
    totalStudentsFail(){
        let listdata:any[] = this.showList();
        let total = 0
        for (let i = 0; i < listdata.length; i++) {
            if (listdata[i].score < 5){
                total++
            }
        }
        return `There are ${total} students fail`
    }

}