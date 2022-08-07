let point = +prompt("Enter yout point: ");
let grad = point >= 80 ? alert("A")
            : point >= 70  && point < 79 ? alert("B")
            : point >= 60  && point < 69 ? alert("C")
            : point >= 50  && point < 59 ? alert("D")
            : alert("F")