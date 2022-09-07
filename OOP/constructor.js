// Cú pháp khai bao

// class myClass {
//     constructor(value1, value2) {
//         this.property1 = value1;
//         this.property2 = value2;
//         this.property3 = "";
//     }
//
//     method1() {
//     ...
//     }
//
//     method2() {
//     ...
//     }
// }

//Phương thức khởi tạo trả về:

class myClass {
    constructor(value) {
        return { property1: value, property2: "" };
    }
}

var x = new myClass("foo");
console.log(x)
// Ví dụ
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let john = new Person("John Doe");
console.log(john)