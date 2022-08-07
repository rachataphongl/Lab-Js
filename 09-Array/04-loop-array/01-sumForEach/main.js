const array = [29, 17, 13, 47, 23, 31];

let allSum = 0;
function sum(item, index, array) {
    allSum += item;
}


array.forEach(sum);
console.log(allSum);
