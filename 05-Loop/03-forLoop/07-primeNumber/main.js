//C = a * b ex. 25 = 5 * 5
// for (let i = 2; i <= 10; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     // for (let j = 2; j < Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime === true) {
//     //or if (isPrime) {
//     console.log(i);
//   }
// }


for(let i = 2; i <= 100; i++) {
    let yy = true;
    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            yy = false;
            break;
        }
    }
    if(yy === true) {
        console.log(i);
    }
};
