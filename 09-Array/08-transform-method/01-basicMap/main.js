const arrayInt = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const resultIntv = arrayInt.map(function(item, index, arr) {
    return item * 2;
})
console.log(resultIntv)

//2
const arrayNum = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const resultNum = arrayNum.map(item => String(item))
console.log(resultNum);


//3
const arrayMix = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
const resultMix = arrayMix.map(function(item, index, arr) {
    return typeof item;
})
console.log(resultMix);

//4
const arrayUpper = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
const resultUpper = arrayUpper.map(function(item, index, arr) {
    return item.toUpperCase();
})
console.log(resultUpper);

//5
const arrayOddEven = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const resultOddEven = arrayOddEven.map(function(item, index, arr) {
    if(item % 2 == 0) {
        return "Even";
    }else{
        return "Odd";
    }
    
})
console.log(resultOddEven);

//6
const arrayPlus = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const resultPlus = arrayPlus.map(function(item, index, arr) {
    if(item < 0 ) {
        return item * -1
    }else {
        return item;
    }
})
console.log(resultPlus);

//7
const arrayFixed = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const resultFixed = arrayFixed.map(function(item, index, arr) {
    return item.toFixed(2);
})
console.log(resultFixed);

//8
const arrayMonth = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const MONTH = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const resultMonth = arrayMonth.map(function(item, index, arr) {
    return MONTH[item];
})
console.log(resultMonth);
