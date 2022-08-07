// let num = +prompt("Enter number: ");
function spc(num) {
    let isPrime = true;
    for(let i = 2; i < num; i++) {
        if(num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
// console.log(spc(7));
// console.log(spc(20));

function printPrime(limit) {
    for(let i = 2; i <= limit; i++) {
        let isPrime = spc(i)
        if(isPrime) {
            console.log(i);
        }
    }
}

printPrime(1000);