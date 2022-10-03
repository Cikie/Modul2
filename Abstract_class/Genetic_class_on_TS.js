//1:
// Một lớp generic có cú pháp tương tự như một generic interface.
// Các lớp generic có danh sách tham số generic trong dấu ngoặc nhọn (<>) theo sau tên của lớp.
//class className<T>{
//     //...
// }
//2:
//TypeScript cho phép bạn có nhiều kiểu generic trong danh sách tham số. Ví dụ:
//class className<K,T>{
//     //...
// }
//3:
//Các ràng buộc generic cũng được áp dụng cho các kiểu generic trong lớp:
//class className<T extends TypeA>{
//     //...
// }
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (elements) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overFlow!');
        }
        this.elements.push(elements);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length === 0) {
            throw new Error('The stack is Empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
// Tạo một ngăn sếp kiểu number
var number = new Stack(5);
// Xây dựng hàm trả về một số ngẫu nhiên giữa hai số low và high:
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var number1 = new Stack(5);
while (!number.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " inot the stack"));
    number.push(n);
}
// Lấy các phần tử trong ngăn xếp đến khi nó rỗng
while (!number.isEmty()) {
    var n = number.pop();
    console.log("Pop ".concat(n, " form the stack"));
}
// tạo ra một ngăn xếp kiểu chuỗi - string:
var words = 'Im Jugganaut Bieat'.split(' ');
var wordStack = new Stack(words.length);
words.forEach(function (words) { return wordStack.push(words); });
while (!wordStack.isEmty()) {
    console.log(wordStack.pop());
}
