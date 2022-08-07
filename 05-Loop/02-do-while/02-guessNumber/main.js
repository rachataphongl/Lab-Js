// let q1;
// let q2 = prompt("Go!!");

// do {
//     q1 = prompt("Enter number 1-99");
//     if(!(q1 == null || q1.trim() == "" || q1 == 0 || isNaN(q1) ||  1<=q1<=99  )) {
//         alert("Try again")
//     } 
// }while()

// Sol

// answer = prompt("Player A : Enter Number");

if(+answer < 1 || +answer > 99) {
    alert("Invalid Range")
}else {
    //player 2
    let count = 0
    do{
        guess  = prompt("Player B : Enter Number");
        count++
        if(guess == answer) {
            alert("Correct")
            alert(count)
        }else if(+guess < +answer && +guess > 0) {
            alert("Less than")
        }else if(+guess > +answer) {
            alert("More than")
        }else{
            alert("Please input number between 1-99")
        }
    }while(guess !== answer)
}

