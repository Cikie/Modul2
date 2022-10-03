// Trong lập trình hướng đối tượng, tính đa hình đề cập đến khả năng tham chiếu đến một lớp dẫn xuất theo kiểu của lớp cha.

class box {
    length: number;
    width: number;
    height: number;

    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume(): number {
        return this.length * this.width * this.height
    }
}

class BoxWeight extends box{
    length:number;
    width:number;
    height:number;
    depth:number;

    constructor(length: number, width: number, height: number, depth: number) {
        super(length, width, height);
        this.depth = depth;
    }
    volume(): number {
        return super.volume() * this.depth;
    }
}
var boxObj :box;
boxObj = new BoxWeight(10,20,30,40);