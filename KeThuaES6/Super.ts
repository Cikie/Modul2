// Từ khóa super được sử dụng để gọi phương thức khởi tạo của lớp cha,
// để có thể truy cập các thuộc tính và phương thức của lớp cha.

//lớp Rectangle
// class Rectangle {
//     name:string;
//     height:number;
//     width:number;
//     constructor(height, width) {
//         this.name = 'Rectangle';
//         this.height = height;
//         this.width = width;
//     }
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//     get area(): number {
//         return this.height * this.width;
//     }
//     set area(value) {
//         this.area = value;
//     }
// }
//
// class Square extends Rectangle{
//
//     constructor(height, width) {
//         super(height, width);
//         this.name = 'Square'
//     }
// }

class Rectangle{
    static logSbSides(){
        return 'i have 4 sides'
    }
}

class Square extends Rectangle{
    static logDescripsion(){
        return super.logSbSides() + 'which are all equal'
    }
}
console.log(Square.logDescripsion())