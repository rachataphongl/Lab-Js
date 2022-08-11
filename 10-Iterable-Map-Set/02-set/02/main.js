const arr = ['Dog', 'Giraffe', 'Bear'];

let arr2 = new Set();
// arr2.add(arr[0]);
// arr2.add(arr[1]);
// arr2.add(arr[2]);

for(let key of arr){
    arr2.add(key);
}

console.log(arr2);