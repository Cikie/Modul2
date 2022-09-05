// const fruits1 = ["apple","Banana","Kiwi"]
// const fruits2 = [...fruits1,"Melon","Dragon Fruits"];
// const fruits3 = [...fruits1,...fruits2];
// console.log(fruits1);
// console.log(fruits2);
// console.log(fruits3);

//Sử dụng Spread Operator với các đối tượng

// const cars1 = {
//     Brand : "BMW",
//     Color : "red",
//     Height : "5"
// }
// const cars2 = {
//     Brand: "Nissan",
//     Color: "Blue",
//     Year : 2004
// };
// const cars3 = {...cars2,...cars1};
// console.log(cars3);

// Sử dụng Spread Operator để chia chuỗi thành một mảng chuỗi.

// const cars1 = "Audi";
// const a = [...cars1];
// console.log(a)

// Sử dụng Spread Operator để cấu trúc lại mảng

const number = [3,2,5,7,1,3]
const [a,b,c,...others] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(others);