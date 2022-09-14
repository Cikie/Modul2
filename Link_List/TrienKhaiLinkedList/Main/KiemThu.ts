import {LinkedList} from "./LinkList";

let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(10);
linkedList.insertLastNode(40);
console.log(linkedList.getSize());
console.log(linkedList.readList());