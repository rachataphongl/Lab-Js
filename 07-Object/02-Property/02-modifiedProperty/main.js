const user = {};

user.name = "John";
//user['name'] = "Jhon";
user.surname = "Doe";

user.name = "Matt";
console.log(user);
delete user.name;
console.log(user);