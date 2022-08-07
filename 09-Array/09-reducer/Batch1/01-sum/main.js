const nums = [-3, 2, 11, -7, 4, 6];

let multi = nums.reduce((acc, item, index, arr) =>acc * item, 1);

console.log(multi);

