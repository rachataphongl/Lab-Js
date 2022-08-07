let user = prompt("Enter your username");
let pass = prompt("Your password");

if(user.trim == '' || user == null) {
    alert('username is requird')
} else if (pass.trim == '' || pass == null) {
    alert("password is requird")
} else if((user == "admin" && pass == '1234')) {
    alert(`Hello ${user} ${pass}`)
} else if((user == "john" && pass == 'qwerty')) {
    alert(`Hello ${user} ${pass}`)
}else {
    alert("invalid username or password")
}

