function ucFirst(str) {
    let neww = str.trim()
    let netSrt = neww[0]
    let string = neww.slice(1)

    return netSrt.toUpperCase() + string ;
}
console.log(ucFirst('aom'));
console.log(ucFirst(''));
console.log(ucFirst('    aom      '));