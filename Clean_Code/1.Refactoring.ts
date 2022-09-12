export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let isFizz = n % 5 == 0;
        let isBuzz = n % 3 == 0;

        if (isBuzz && isBuzz) {
            let fizzBuzz = this.message = 'FizzBuzz';
        } else if (isFizz) {
            let fizz = this.message = 'Fizz';
        } else if(isBuzz) {
            let buzz = this.message = 'Buzz';
        } else {
            let s = this.message = n + '';
        }
    }
}