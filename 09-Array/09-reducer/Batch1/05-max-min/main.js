let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const initailValue = {
    max: arr[0],
    min: arr[0]
}

let summay = arr.reduce((acc, item) => {

    //MAX
    if(acc.max < item){
        acc.max = item;
    }
    //MIN
    if(acc.min > item){
        acc.min = item;
    }
    return acc;
}, initailValue)

console.log(summay)