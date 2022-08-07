let user = prompt("Enter UserName: ");
let pass = prompt("Enter UserName: ");

function login(user, pass) {
    if(user == "admin" && pass == "P@ssw0rd"){
        return alert("Succees");
    }
    return alert("Wrong");
}
console.log(login(user, pass));