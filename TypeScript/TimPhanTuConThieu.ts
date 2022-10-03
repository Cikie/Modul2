// mảng gồm các phần tử từ 0 đến 10
// in ra các số k xuất hiện trong mang

let number: number[] = [0,2,3,5,7,8,9,10]
let missingElement: number[] = [];
for (let i = 0; i <= 10; i++) {
    if(number.indexOf(i) == -1){
        missingElement.push(i)
    }
}
console.log(missingElement);