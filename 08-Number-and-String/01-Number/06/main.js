
function randomNum(min, max) {
    
    let diff = Math.random() * (max - min);
    return (min + diff).toFixed;
};
console.log(randomNum(4, 10));
