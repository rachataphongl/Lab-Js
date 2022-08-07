let itr = 2.5;
let money = 100000;
// let all = 0;
for(let i = 1; i <= 10; i++) {
    money +=   ((itr/100) * money);
};
console.log(money.toFixed(2));