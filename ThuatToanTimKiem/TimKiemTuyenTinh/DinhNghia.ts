//Thuật toán tìm kiếm được thực hiện theo một cách đơn giản,
// đó là lần lượt so sánh các phần tử trong danh sách với dữ liệu đang muốn tìm kiếm, từ đầu cho đến cuối.

function search(numbers:number[],needle:number){
    for (const number of numbers){
        if (number === needle){
            return true;
        }
    }
    return false
}
let arr = [1,2,3,4,5,6,7];
console.log(search(arr,5)); //true
console.log(search(arr,8)); //false