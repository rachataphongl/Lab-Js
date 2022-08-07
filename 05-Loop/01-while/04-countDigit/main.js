let num = +prompt("Enter Number");
let count = 0;


//Counter = 0
//4596 => count
while(num) {
    let remainder = num % 10   //6
    num = (num - remainder) / 10 //459
    count++;
}

alert(count);

