let str = '31 45 12 67 34 86 23 37 19 41';


const arrNum = str.split(" ");
let sum = arrNum.reduce(function(acc, item, index, arr) {
    if(item < 40) {
        acc += +item;
    }
    return acc;
}, 0)
console.log(sum);