abstract class Employee {
    constructor (private firstName: string,
                private lastName: string) {
    }

    abstract getSalary(): number

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class FulltimeEmployee extends Employee {

    constructor(firstName: string,
                lastName: string,
                private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }

}

class Contructor extends Employee {

    constructor(firstName: string,
                lastName: string,
                private rate: number,
                private hours: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.rate * this.hours;
    }

}

let john = new FulltimeEmployee('John','Dee',20022);
let jane = new Contructor('Jane','Dee',200,24);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
