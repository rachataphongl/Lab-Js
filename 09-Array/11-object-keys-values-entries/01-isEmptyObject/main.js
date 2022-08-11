
const num = {
    one: 1,
    two: 2,
    three: 3
}



function checkEmptyObj(obj) {
   
    for(let key in obj) {
    if(key !== undefined) {
        return "Mee-Khong";
    } 
    }
    return"Empty";
}
console.log(checkEmptyObj(num));