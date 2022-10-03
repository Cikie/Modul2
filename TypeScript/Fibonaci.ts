// Hiển thị số Fibo ở bị trí N
// Hiển thị dãy và tính tổng
function fibonaci(number) {
    if (number <= 1) {
        return 1;
    } else {
        return fibonaci(number - 2) + fibonaci(number - 1)
    }
}
let n = 5;
let sum = 0
for (let i = 0; i <= n; i++) {
    console.log(fibonaci(i));
    sum += fibonaci(i)
}
console.log(sum)
