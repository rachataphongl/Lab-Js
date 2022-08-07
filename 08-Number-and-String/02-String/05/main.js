//INPUT: 'String' , length
//OUTPUT: 'string' (modifined)
//IF length of string > length
// modifined
//ELSE return original string
function truncate(str, length) {
    
    if(str.length>length) {
        let modifined = str.slice(0, length) + "..."
        //HelloMyfriend.slice(0, 5)
        return modifined
    }else {
        return str;
    }
   
}
console.log(truncate('HelloMyfriend', 5))
