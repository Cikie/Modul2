import {ArrayList} from "../model/Arraylist";

interface Post{
    title:string;
}
let arraylist = new ArrayList<Post>();
arraylist.add({title: "Lập trình Js"})
arraylist.add({title: "Lập trình PHP"})
arraylist.add({title: "Lập trình Java"})
console.log(arraylist.container)