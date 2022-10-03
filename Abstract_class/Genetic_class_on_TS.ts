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

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }

    isEmty(): boolean {
        return this.elements.length === 0
    }

    isFull(): boolean {
        return this.elements.length === this.size
    }

    push(elements: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overFlow!')
        }
        this.elements.push(elements)
    }

    pop(): T {
        if (this.elements.length === 0) {
            throw new Error('The stack is Empty!')
        }
        return this.elements.pop()
    }
}

// Tạo một ngăn sếp kiểu number
let number = new Stack<number>(5)

// Xây dựng hàm trả về một số ngẫu nhiên giữa hai số low và high:
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let number1 = new Stack<number>(5)
while (!number.isFull()){
    let n = randBetween(1,10);
    console.log(`Push ${n} inot the stack`)
    number.push(n)
}

// Lấy các phần tử trong ngăn xếp đến khi nó rỗng
while (!number.isEmty()){
    let n = number.pop();
    console.log(`Pop ${n} form the stack`)
}

// tạo ra một ngăn xếp kiểu chuỗi - string:

let words = 'Im Jugganaut Bieat'.split(' ');

let wordStack = new Stack<string>(words.length)
words.forEach(words => wordStack.push(words));
while (!wordStack.isEmty()){
    console.log(wordStack.pop());
}