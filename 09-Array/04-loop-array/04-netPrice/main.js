
// /*
//   INPUT: Array f sales (each === object)
//   OUTPUT: Array of summary  (each === object)

// */
// function calSummary(salesArray) {

//   const summary = [];

//   //LOGIC  ==> LOOP every ITEM

//   for (let item of salesArray) {
//     //1 item == {  price: 1000, discount: 0.1 }
//     //1 item == { price: 500, discount: 0.05 }
//     //1 item == {  price: 100 }
//     let currentObject = {};
//     let netPrice = item.price * (1 - item.discount)
//     currentObject.netPrice = netPrice;
//     summary,puch(currentObject);
//   }

//   return summary
// };





//สร้างตัวแปร summary จาก input
//

// const sampleObj = { price: 1000, discount: 0.1 };

// const netPrice = (obj) => {
//       // console.log(obj);   
//       console.log(obj.price);   
//       let sumNet = obj.price -(obj.price * obj.discount);
//       console.log(sumNet)
//       // return sumNet;
// }
// netPrice(sampleObj);

// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 }
// ];

// const calculateNetPrice = (obj) => {
//     let summary = [];

//     for(let item of obj) {
//       if(item.discount !== undefined) {
//         const netPrice = item.price - (item.price * item.discount)
//         const netPriceObj = {
//           netPrice: netPrice
//         }
//         summary.push(netPriceObj)

//       }else {
//         const netPrice = item.price;
//         const kak = {
//           netPrice: netPrice
//         }
//         summary.push(kak);
//       }
//       console.log(summary);
//     }
// }
// calculateNetPrice(sales);




const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];



const calculateNetPrice = (infomation) => {
      const summary = [];

      for(let item of infomation) {
        if(item.discount !== undefined) {
          let p = item.price - (item.price * item.discount);
          const afterCal = {
            netPrice: p
          }
          summary.push(afterCal);
        }else {
          item.price
          const donthavediscount = {
            netPrice: item.price
          }
          summary.push(donthavediscount);
        }
      }
      console.log(summary);

}
calculateNetPrice(sales);