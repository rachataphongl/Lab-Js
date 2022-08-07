let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)

let sorted = copySorted(arr);

function copySorted(arr) {
  const clone = arr.slice();
    return clone.sort();
}
console.log(copySorted(arr));
