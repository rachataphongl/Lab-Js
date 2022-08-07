let multi = 12;
let nth = "";
for(let i = 2; i <= multi; i++) {
    nth += `### ${i} ### \n`
    for(let m = 1; m <= 12; m++) {
        
        nth += i + " x " + m + " = " + (i * m) + "\n";
    }
};
console.log(nth);