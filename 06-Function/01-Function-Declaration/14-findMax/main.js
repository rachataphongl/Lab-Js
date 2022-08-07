// function max(a, b, c, d) {

//     if(a === undefined) {
//         return undefined;
//     }
//     //ใส่แค่a
//     if(b === undefined) {
//         return a;
//     }

//     //ใส่  a, b
//     if(c === undefined) {
//         return a > b ? a : b;
//     }
//     //ใส่   a, b, c
//     if(d === undefined) {
//         let max = Math.max(a, b, c); //Return Muximun value
//         return max;
//     }
//     return Math.max(a, b, c, d);
// }


function max(a, b, c, d) {
    
    //ไม่ใส่อะไรมาเลย
    if(a === undefined) {
        return "Empty!!";
    }
    
    // ใส่แค่  a หรือ ใส่ทั้ง a และ b
    if(b === undefined) {
        return a;
    }
    if(a > b && c === undefined) {
        return a;       
    }
    if(b < b && c === undefined) {
        return b;
    }
    
    //ใส่ a , b , c ไม่ใส่ d
    if(d === undefined) {
        return Math.max(a, b, c)
    }
    return Math.max(a, b, c, d);



}
console.log(max(7, 3, 9, 10));