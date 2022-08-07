//get .2
// .00
function get(num) {
     
    // return num.toFixed(2);

    return (Math.floor(num * 100) / 100).toFixed(2);
};

console.log(get(3.1289));
console.log(get(10));