let num = +prompt("Enter First-Number:");
let num2 = +prompt("Enter Second-Number:");
let num3 = +prompt("Enter Third-Number:");


if(num > num2 && num2 > num3) {
    //3, 2, 1
    console.log(num, num2, num3);
}else if(num2 > num && num > num3) {
    //2, 3, 1
    console.log(num2, num, num3);
}else if(num3 > num && num > num2) {
    //1, 2, 3
    console.log(num3, num2, num);
}else if(num2 > num && num2 > num3) {
    //1, 3, 2
    console.log(num2, num3, num);
}else if(num > num2 && num3 > num2) {
    //3, 1, 2
    console.log(num, num3, num2)
}else if(num3 > num2 && num > num2) {
    //2, 1, 3
    console.log(num3, num, num2);
}


