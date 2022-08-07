
let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];


  //####### :(
//   let split = flattened.reduce(function(acc, item) {
//     let arr = flattened.join();
//     let nArr = [arr];
    
//     return nArr;
// })
// console.log(split)


//#####Sol
function flatArray(arr) {
    let flattenedArray = arr.reduce((acc, item, index)=> {
            acc.push(...item);
            return acc;
    }, [])

    return flattenedArray;
}
console.log(flatArray(flattened));