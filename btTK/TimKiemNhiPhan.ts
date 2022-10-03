// Triển khai bằng vòng lặp

// function binarySearch(numbers:number[],
//                       needle:number):any{
//     let left = 0;
//     let right = numbers.length -1;
//     while (left <= right){
//         let mid = Math.floor(left+right)/2;
//         if (numbers[mid] == needle){
//             return true
//         }else if (numbers[mid]> needle){
//             right = mid -1
//         }else {
//             left = mid+1
//         }
//     }
//     return false
// }
// let arr = [1,2,3,4,5,6,7,8];
// console.log(binarySearch(arr,2)); //true
// console.log(binarySearch(arr,9)); //false

// Triển khai bằng thuật toán đệ quy:

function binarySearch(numbers: number[],
                      needle: number,
                      left: number,
                      right: number): boolean {
    if (right < left) {
        return false;
    }
    let mid = Math.floor((right + left)/2);
    if (numbers[mid] == needle) {
        return true;
    } else if (numbers[mid] > needle) {
        return binarySearch(numbers, needle, left, mid - 1)
    }else {
        return binarySearch(numbers,needle,mid+1,right)
    }
}
let arr = [1,2,3,4,5,6,7,9,10];
console.log(binarySearch(arr,6,0,arr.length-1));
console.log(binarySearch(arr,8,0,arr.length-1));