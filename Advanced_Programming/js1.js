// 1) Truyền đối số không xác định

// function createDiv(
//     height = '100px',
//     width = '100px',
//     border = 'solid 1px red'
// ){
//     let div = document.getElementById('div');
//     div.style.height = height;
//     div.style.width = width;
//     div.style.border = border;
//     document.body.appendChild(div);
//     return div
// }
// createDiv( undefined,undefined,'solid 5px blue');

//2) Đánh giá các thông số mặc định

// function put (toy,toyBox = []){
//     toyBox.push(toy);
//     return toyBox
// }
//
// console.log(put('Toy Car'))
// console.log(put('TeddyBear'))

// function date (d=today(),t = time()){
//     console.log(d);
//     console.log(t)
// }
// function today(){
//     return (new Date()).toLocaleDateString("en-US");
// }
// function time(){
//     return (new Date()).toLocaleTimeString("en-US");
// }
// date();

//3) Sử dụng các tham số khác trong các giá trị mặc định

let taxRate = () => 0.1;
let getPrice = function (price,tax = price * taxRate()){
    return price + tax;
}
let fullPrice = getPrice(100);
console.log(fullPrice);