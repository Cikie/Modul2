//Xây dựng chương trình in ra màn hình danh sách các phần tử còn thiếu trong dãy số tăng dần từ 1 - 10.
//
// Ví dụ:
//
// input: arr = [1, 2, 5, 6, 7, 10]
// output: [3, 4, 8, 9]
function findItemMiss(data) {
    var i = 1;
    var arr = [];
    while (i < 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(findItemMiss([1, 2, 5, 6, 7, 10]));
