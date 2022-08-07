// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

//   // INput : Object
//   // Output: sum of salalies == number
//   let calSalalies = function(obj)  {
//     let sum = 0;

//     for(let key in obj) {
//         let currentSalaly = obj[key] //obj.john, obj.ann,obj.pete ||
//         sum += currentSalaly 
//     }
//     return sum;
//   } 

// console.log(calSalalies(salaries));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let test = {};


const average = (obj) => {
    let sum = 0;
    if(obj) {
    for(let key in obj) {
      sum += obj[key];
    }
  }else {
    return '0';
  }
    return sum;
}
console.log(average(salaries));