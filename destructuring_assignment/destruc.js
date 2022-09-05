// Cú pháp Array Destructuring:
// var x, y;
// [x, y] = [10, 20];
// console.log(x);
// console.log(y);
// // hoặc
// [x, y, ...restof] = [10, 20, 30, 40, 50];
// console.log(x);
// console.log(y);
// console.log(restof);
//
// //Cú pháp Object Destructuring:
// ({x, y} = {x: 10, y: 20});
// console.log(x);
// console.log(y);
// //Hoặc
// ({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
// console.log(x);
// console.log(y);
// console.log(restof);

// Sử dụng destructuring assignment trích xuất các giá trị của mảng

// let [fname,sname]= ["alpha","Beta","gamma","delta"];
// console.log(fname);
// console.log(sname);

// Gán một số phần tử mảng cho biến và phần còn lại của các phần tử mảng cho chỉ một biến duy nhất

// let [fname,,...lname]=["alpha","beta","gamma","delta"];
// console.log(fname);
// console.log(lname);

//hoán đổi bằng cách sử dụng destructuring assignment

// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);
// console.log(secondName);
// //After swapping
// [firstName,secondName] = [secondName,firstName]
// console.log(firstName);
// console.log(secondName);

//trích xuất dữ liệu từ một mảng được trả về từ một hàm.

// function Namelist (){
//     return['alpha','delta','beta','bravo']
// }
//
// let [firstName,secondName] = Namelist();
// console.log(firstName);
// console.log(secondName);

//gán các biến trong ES6 bằng cách sử dụng destructuring assignment

// let mark = {x: 21, y: 23, z: 76};
// const {x, y, z} = mark;
// console.log(x);
// console.log(y);
// console.log(z);

//Các đối tượng lồng nhau cũng có thể được trích xuất dữ liệu sử dụng destructuring assignment

const marks = {
    sections1: {alpha: 15, beta: 20},
    sections2: {gamma: 16, delta: 21}
}
const {sections1: {alpha: alpha1, beta: beta1}} = marks
const {sections2: {gamma: gamma1, delta: delta1}} = marks
console.log(alpha1,beta1);
console.log(gamma1,delta1);