let user = prompt("What's your name?");
let ps;
if(user === null || user ===  '' || user.trim() === '' ) {
    console.log("guest");
}else if(user == "codecamp") {
   ps = prompt("password: ")
   if(ps == "123456"){
    user = "codecamp";
   }else {
    alert("Wrong password");
   }
}else if(user != "codecamp") {
    user = "guest";
}
alert("Welcome " + user);