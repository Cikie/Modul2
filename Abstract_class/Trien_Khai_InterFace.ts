interface Person {
    firstname: string;
    lastname: string;
    age: number;

    fullname();

    GetAge()
}

class Employee implements Person {
    firstname: string;
    lastname: string;
    age: number;
    fullname() {
        return this.firstname + this.lastname
    }
    GetAge() {
        return this.age
    }

    constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}
let employee = new Employee('Dao','Anh',26)
let Fullname = employee.fullname();
let Age = employee.GetAge();
console.log("Name of Person" + Fullname + '\nAge :' + Age)