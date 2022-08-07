const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

//for in //#1
// let result = []
// for(let item in alphabets) {
//     if(alphabets[index] === 'a') {
//         result.push(index);
//     }
// }
// console.log(result);

//#2 IndexOf
//IDIA: 
//1st search ==> found ==> know index(1)
//2nd search ==> starting from index(1st search)
//...
//...
//Nth ==> found ==> index == -1(notfound)
let result = [];
let foundIndex = alphabets.indexOf('a');

do{

    if(foundIndex !== -1) {
        result.push(foundIndex);
        foundIndex = alphabets.indexOf('a', foundIndex + 1);
    }

}while(foundIndex !== -1)

console.log(result);