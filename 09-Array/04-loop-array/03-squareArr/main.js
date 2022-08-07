

// function squareArr(item, index, array) {
//     arr[index] = item ** 2;

// }
// const arr = [2, 3, 5, 7, 11];
// arr.forEach(squareArr);
// console.log(arr)



//Sol
function squareArr(arr) {
    const resultArr = [];

    //Logic ==> Loop every item
    arr.forEach(item => {
        let squareNum = item ** 2;
        resultArr.push(squareNum);
    })

    return resultArr;
}
const arr = [2, 3, 5, 7, 11];
console.log(squareArr(arr));