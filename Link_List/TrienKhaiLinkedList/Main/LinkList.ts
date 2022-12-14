import {Note1} from "../Model/Class";

export class LinkedList<T> {
    head: Note1<T> | null;
    tail: Note1<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data: T): void {
        let node = new Note1(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node
        }
        this.size++
    }

    insertLastNode(data: T): void {
        if (!this.head) {
            this.insertFirstNode(data)
        } else {
            let node = new Note1(data);
            this.tail.next = node;
            this.tail = node;
            this.size++
        }
    }

    getSize(): number {
        return this.size;
    }

    readList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }
}