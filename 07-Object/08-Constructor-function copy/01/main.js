function Objectcalculator() {
    this.num = 0;
    this.num2 = 0;
    this.read = function() {
       this.num = +prompt("Enter number: ");
       this.num2 = +prompt("Enter number2:");
    }
    this.sum = function() {
        return this.num + this.num2;
    }
    this.mul = function() {
        return this.num * this.num2;
    }
}

let re1 = new Objectcalculator();
re1.read()
re1.sum()
re1.mul()

console.log(re1.sum());
console.log(re1.mul());