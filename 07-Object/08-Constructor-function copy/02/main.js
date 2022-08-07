function Accumulayor(num) {
    //this = {}
    this.currentValue = num;
    this.read = function() {
        this.currentValue += +prompt("Input: ");
    }
    this.show = function() {
        alert(this.currentValue);
    }
}

let showw = new Accumulayor(8);
showw.read();
showw.show();

// console.log(showw);