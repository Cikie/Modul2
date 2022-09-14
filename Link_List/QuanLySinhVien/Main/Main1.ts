import {LinkedList} from "./LinkNew";

let linklist = new LinkedList();
linklist.insertFirst({name:"Ciki",score:8});
linklist.insertFirst({name:"Ciki",score:5});
linklist.insertFirst({name:"Ciki",score:1});
linklist.insertLast({name:"Ciki",score:6});
linklist.insertFirst({name:"Ciki",score:3});

console.log(linklist.showList());
console.log(linklist.totalStudentsFail());