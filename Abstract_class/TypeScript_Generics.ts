//TypeScript Generics là một công cụ cung cấp cách tạo các thành phần có thể tái sử dụng.
// Nó tạo ra một thành phần có thể hoạt động với nhiều kiểu dữ liệu hơn là một kiểu dữ liệu duy nhất.
// Generics đảm bảo rằng chương trình linh hoạt cũng như có thể mở rộng trong thời gian dài.
//Trong generics, chúng ta cần viết một tham số kiểu giữa hai dấu ngoặc mở (<) và đóng (>).
// Generics sử dụng một loại biến kiểu đặc biệt <T> biểu thị các kiểu
// function identity(arg: T): T {
//     return arg;
// }
// let output1 = identity("myString")
// let output2 = identity(100)
// console.log(output1);
// console.log(output2);


// Tại sao cần Generics?
function getItem(items: any[]): any[] {
    return new Array().concat(items);
}

let myNumarr = getItem([10, 20, 30]);
let myStrarr = getItem(["hello", "JS"]);
myNumarr.push(40);
myNumarr.push("Hello TypeScript")
myStrarr.push("Hello SSSIT");
myStrarr.push(40);
console.log(myStrarr);
console.log(myNumarr);