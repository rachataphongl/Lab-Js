function isArray(input) {
    return Array.isArray(input)
}
console.log(isArray({}));
console.log(isArray(1));
console.log(isArray([]));
console.log(isArray([1, 2, 3, 4]));