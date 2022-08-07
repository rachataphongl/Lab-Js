let sum = 0;
let sumEven = 0;
let sumOdd = 0;
let sumEvenMulti = 0;
let sumOddMulti = 0;
for(let i = 0;i <= 100 ; i++) {
    sum += i;
    if(i % 2 == 0) {
        sumEven += i;
        sumEvenMulti += i**2;
    }else {
        sumOdd += i;
        
    }if(i % 3 == 0) {
        sumOddMulti += i**2;
    }
}
console.log("Sum :" + sum);
console.log("Sum(Even) :" +sumEven);
console.log("Sum(Odd) :" +sumOdd);
console.log("Sum%2 - Sum%3 :" + (sumEvenMulti - sumOddMulti));


