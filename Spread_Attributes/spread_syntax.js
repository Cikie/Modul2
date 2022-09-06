function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//thực hiện đẩy các phần tử vào trong một mảng.
var a = [1, 2];
a.push([1, 2, 3]);
console.log(a)

//thực hiện đẩy các phần tử vào trong một mảng.
var a = [1, 2];
var b = [1, 2, 3];
a.push(...b);
console.log(a)

//sao chép một mảng:
var a = [1, 2];
var b = [1, 2, 3];
a = [...b];
console.log(a)

// sao chép một đối tượng:
var obj1 = {a: 1,b: 2};
var obj2 = {...obj1 };
console.log(obj2)

// nối 2 mảng:
var a =[1,2];
var b =[3,4];
var c = [...a,...b];
console.log(c)