// let star = "";
// for(let i = 1; i <= 4; i++) {
//     for(r = 1; r <= i; r++) {
//        star += "* ";
//     };
//     star += "\n"
// };
// console.log(star);

let star = "";
for(i = 1; i <= 4; i++) {
    if(i==1) {
        star += "*\n"
    };
    if(i == 2) {
        star += "* *\n"
    }
    if(i == 3) {
        star += "* * * \n"
    }
    if(i == 4) {
        star += "* * * *\n"
    }
}
console.log(star);

