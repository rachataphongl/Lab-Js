let primeCheck = (a) => {
    let prime = true;
    for(let i = 2; i < a; i++){

            if(a % i == 0) {
                prime = false;
                console.log(a, 'no');
                break;
            }
            if(prime == true){
                return console.log(a, "yes");
            }
    
    }
    return console.log(a, 'yes')
}
primeCheck(2);

// for(let j = 2; j <= i; j++)
