// Hiển thị số Fibo ở bị trí N
// Hiển thị dãy và tính tổng
function fibonaci(number) {
    if (number <= 1) {
        return 1;
    }
    else {
        return fibonaci(number - 2) + fibonaci(number - 1);
    }
}
var n = 5;
for (var i = 0; i < n; i++) {
    console.log(fibonaci(i));
}
