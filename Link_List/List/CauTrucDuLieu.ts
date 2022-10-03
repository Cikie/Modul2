//  khai báo 1 lớp có tên là Node để đại diện cho một phần tử trong trong LinkedList.

export class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

// export class LinkedList<T>{
//     head:Node<T> |null;
//     tail:Node<T> |null;
//
//     size:number;
//
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0
//     }
// }

//Thêm phần tử vào phần đầu của LinkedList

export class LinkedList<T> {
    head: Node<T> | null
    tail: Node<T> | null

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data: T) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++
    }

    // thực hiện thao tác thêm phần tử vào đuôi của LinkedList
    //chúng ta thực hiện trỏ tham chiếu ở phần tử cuối cùng vào phần tử mới.

    insertLastNode(data: T) {
        if (!this.head) {
            this.insertFirstNode(data);
        } else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    //   Xoá phần tử đầu tiên của LinkedList
    deleteFirstNode(data: T) {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            this.size--
        }
    }
    //Xoá phần tử cuối cùng của LinkedList

    deleteLastNode(data:T){
        if(this.head){
            let currentNode = this.head
            if (!currentNode.next){
                this.head = null;
            }else {
                let previousNode = null;
                while (currentNode.next){
                    previousNode = currentNode;
                    currentNode = currentNode.next
                }
                previousNode.next = null;
                this.tail = previousNode;
                this.size--
            }
        }
    }
}


