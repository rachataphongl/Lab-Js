// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
//   };

// let multiplyNumberic = (obj, num) => {
//     let sum = 0;
//     for(let key in obj ) {
//         if(obj[key] == null || obj[key] == '' || obj[key.trim] == '' || isNaN(obj[key])  ) {

//         }

//     };
//     return sum;
// }

// const multiplyNumberic = (obj, num) => {
//     const result = {};
//     for(let key in obj) {
//         let currentValue  = obj[key]
//         //let current = 5
//         //obj[key] = current
//         if(typeof currentValue == 'number') {
//             result[key] = currentValue * num;
//         }else{
//             result[key] = currentValue
//         }
//         // result[key] = 5
//     }
//     return result;
// }
// console.log(multiplyNumberic(menu, 10));

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

let  multiplyNumeric = (obj, num) => {
    const result = {};
    for(let key in obj) {
        if(typeof obj[key] === "number") {
            result[key] = obj[key] * num
        } else {
            result[key] = obj[key]
        }
    }
    return result;
}
// multiplyNumeric(menu, 3);
console.log(multiplyNumeric(menu, 3));
console.log(menu);
