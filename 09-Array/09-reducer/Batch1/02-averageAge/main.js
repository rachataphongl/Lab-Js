// let john = { name: 'John', age: 27 };
// let jo = { name: 'Jo', age: 21 };
// let jin = { name: 'Jin', age: 25 };

// let arr = [john, jo, jin];

// let num = arr.reduce(function(acc, item, index, arr) {
//     let sumall = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sumall += acc + item.age
//     }

//     return (sumall / 3);
// }, 0)

// console.log(num);

//##############Sol

// let john = { name: 'John', age: 27 };
// let jo = { name: 'Jo', age: 21 };
// let jin = { name: 'Jin', age: 25 };

// let arr = [john, jo, jin];

// function getAverageAge(arr) {
//     let sumAge = arr.reduce(function(acc, item){
//         let age = item.age;

//         return acc + age;
//     }, 0)
//     let averageAge = sumAge / arr.length
//     return averageAge;

// }

// console.log(getAverageAge(arr));

let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];
function getAverageAge(names) {
    let sumAge = names.reduce(function(acc, item) {
        let age = item.age;

        return acc + age;
    }, 0);
   let averageAge = sumAge / names.length;
    
    return averageAge.toFixed(2);
}
console.log(getAverageAge(arr));