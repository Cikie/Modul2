export class Caculator {
    static readonly Addition = '+'
    static readonly Subtraction = '-'
    static readonly Multiphication = '*'
    static readonly Division = '/'
    public static caculate(firstOperand: number, secondOperand: number, operator: string): number {
        switch (operator) {
            case this.Addition:
                return firstOperand + secondOperand;
            case this.Subtraction:
                return firstOperand - secondOperand;
            case this.Multiphication:
                return firstOperand * secondOperand;
            case this.Division:
               if(secondOperand!=0)
                   return firstOperand/secondOperand;
               else console.log("can not divide by 0");
            default:
                console.log("Unsupported ")
        }
    }
}   