const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterRage(array, loweBund, upperBound) {
    const resultArr = arr.filter(item >= loweBund&&item <= upperBound )
    return resultArr;
}