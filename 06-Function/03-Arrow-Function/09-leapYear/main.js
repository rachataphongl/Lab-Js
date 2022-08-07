let leap = (y) => {
    if(y % 100 == 0){
        if(y % 400 == 0) {
            return true;
        }else{
            return false;
            //return year % 400 == 0 ? true : false
            //return year % 400 == 0
    }
    }else if(y % 4 == 0) {
        return true;
    }else {
        return false;
    }
}
console.log(leap(48));
