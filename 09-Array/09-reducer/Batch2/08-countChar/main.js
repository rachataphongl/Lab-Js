let str = "I live in Thailand";

let lowercase = str.toLocaleLowerCase();
const arrChar = lowercase.split("");
// console.log(arrChar);

const result = arrChar.reduce(function (acc, item) {
  if (item.trim() !== "") {
    let foundValue = acc[item];
    console.log(item)
    if (foundValue) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }

    return acc;
  }
  return acc;
}, {});

console.log(result);