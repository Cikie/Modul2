//
// var obj = {
//     num: 100
// }
// var add = function (a, b, c) {
//     return this.num + a + b + c;
// }
// var result = add.call(obj, 1, 2, 3)
//
// console.log(result) // result 106
//
// const arr = [1, 2, 3]
// var result = add.apply(obj, arr)
// console.log(result) // result 106
//
// var result = add.bind(obj)
// console.log(result(1, 2, 3)) // result 106

//Khi nào nên sử dụng hàm Lambda?

var obj ={
    count :10,
        doSomethingLater : function (){
            setTimeout(() => {
                this.count++;
                console.log(this.count)
            },300)
        }
}
obj.doSomethingLater()