//  Generic Interface có danh sách tham số kiểu generic trong dấu ngoặc nhọn <> sau tên của interface:
//interface interfaceName<T> {
//     // ...
// }

//Điều này làm cho phép sử dụng tham số kiểu <T> cho tất cả các thành phần của interface.
//
// Generic Interface có thể có một hoặc nhiều tham số kiểu generic. Ví dụ:
//interface interfaceName<U, V> {
//     // ...
// }

interface Pair<K, V> {
    Key: K;
    Value: V;
}

let month: Pair<string, number> = {
    Key: 'Jap',
    Value: 1
};
console.log(month)

//Khai báo một generic interface với 2 phương thức add() và remove()
interface Collection<T> {
    add(o: T): void;

    remove(o: T): void;
}
//lớp List<T> triển khai interface Collection<T>:
class List<T> implements Collection<T> {
    private item: T[] = [];

    add(o: T): void {
        this.item.push(o)
    }

    remove(o: T): void {
        let index = this.item.indexOf(o)
        if (index > -1) {
            this.item.splice(index, 1)
        }
    }
}
//sử dụng lớp List <T> để tạo danh sách các số:
let list = new List<number>()
for (let i = 0; i < 10; i++) {
    list.add(i)
}

interface Options<T> {
    [name: string]: T
}

//khai báo một generic interface mô tả một loại chỉ mục:
let inputOptions: Options<boolean> = {
    'dissable': false,
    'visible': true
};