// GET : Input
//  IF number
//  ADD number to SUM
//  ADD 1 to count 
//  BACK to line 2
// ELSE
//  print sum
//  print average

let input;
let sum = 0;
let count = 0;
do {
    input = prompt("Enter Number")
    if(!(input == null || input.trim() == "" || input == 0 || isNaN(input))) {
        sum += +input
        count++
    }
} while (!(input == null || input.trim() == "" || input == 0 || isNaN(input)))

if(count>0) {
    console.log("sum all input number: " +sum);
    console.log("count input: "+count);
    console.log("Average: " +sum / count);
} 