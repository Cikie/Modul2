// Cú Pháp
// function name(parameter = value,...parameters){
//
// }

function mutiply(a, b = 2) {
    return a * b;
}

let num1 = mutiply(5);
console.log(num1);
let num2 = mutiply(6, 8)
console.log(num2)

class geeks {
    constructor(a, b = 3) {
        console.log(a * b)
    }
}
let obj = new geeks(5)
let obj1 = new geeks(5,6)