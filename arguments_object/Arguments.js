// function func1(a,b,c){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }
// func1(1,2,3)

//sử dụng arguments.length

// function longestString(){
//     var longest = '';
//     for (let i = 0; i < arguments.length; i++) {
//         if(arguments[i].length > longest.length){
//             longest = arguments[i]
//         }
//     }
//     return longest;
// }
//
// console.log(longestString(' ','12344','12',3.2544,))


//Định nghĩa một hàm nối chuỗi

// function myConCat(separator){
//     let args = Array.prototype.slice.call(arguments,2);
//     return args.join(separator)
// }
// myConCat(', ', 'red', 'orange', 'blue');
//
//
// Định nghĩa một hàm tạo danh sách HTML

function list(type) {
    var html = '<' + type + 'l><li>';
    var args = Array.prototype.slice.call(arguments, 1);
    html += args.join('</li><li>');
    html += '</li></' + type + 'l>'
    return html
}
let listHTML = list('u','one','Two','three')
