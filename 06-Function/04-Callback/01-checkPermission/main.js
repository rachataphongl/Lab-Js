const checkPermission = (role, aFunc, bFunc) => {
    if(role == "ADMIN"){
        aFunc();
    }else{
        bFunc();
    }
}

function Admin() {
    alert("ACCESS GRANTED");
}

function Guest() {
    alert("ACCESS DENIED");
}

checkPermission("ADMIhgjhN", Admin,Guest );


//By.floksong(soHandsome)
// let ad = (role, afunc, bfunc) => {
//     if(role == "a") {
//         afunc();
//     }else {
//         bfunc();
//     };
// };

// function yyy() {
//     alert("yes");
// };

// function nnn() {
//     alert("no");
// };
// ad("a", nnn,yyy);