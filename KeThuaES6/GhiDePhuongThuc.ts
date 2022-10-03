//Ghi đè phương thức là quá trình viết lại một phương thức cùng tên và các tham số trong lớp con.
//
// Ghi đè phương thức rất hữu ích khi lớp con muốn sửa đổi hành vi của lớp cha cho một số tác vụ nhất định.

class Person {
    name: string;

    eat(): void {
        console.log(this.name + " eats when hungry")
    }
}

class Student extends Person {
    rollnumber: number;

    constructor(rollnumber: number, name1: string) {
        super();
        this.rollnumber = rollnumber;
        this.name = name1
    }

    displayInFormation(): void {
        console.log("Name : " + this.name + ",Roll number :" + this.rollnumber)
    }
    eat():void{
        console.log(this.name + "eats during break. ")
    }
}
var student1 = new Student(2,"Rohit")

student1.displayInFormation();
student1.eat()