import {LinkedList} from "./LinkNew";

let linklist = new LinkedList();
linklist.insertFirst({name:"Ciki",score:8});
linklist.insertFirst({name:"Morg",score:5});
linklist.insertFirst({name:"Dyland",score:1});
linklist.insertLast({name:"Brok",score:6});
linklist.insertFirst({name:"Tifany",score:3});

console.log(linklist.showList());
console.log(linklist.totalStudentsFail());