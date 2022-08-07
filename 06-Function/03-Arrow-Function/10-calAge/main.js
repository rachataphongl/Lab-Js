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


let calcDayFromBirthYear = (birdthYear) => {
    let day = 0;

    //
    for(let i = birdthYear; i <= 2020; i++) {
        if(leap(i)){
            day += 366;
        }else {
            day += 365;
        }
    }
    return day;
}

console.log(calcDayFromBirthYear(1996));