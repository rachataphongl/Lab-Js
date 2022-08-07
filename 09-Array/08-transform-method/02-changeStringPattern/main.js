/*
สร้าง function ในการเปลี่ยน ค่า dash-srparated ==> camelCase เช่น background-color ==> backgroundColor
 */

let word = 'background-color';
function tranfrom(value) {
    //รับค่า valueมา
    let first = value.slice(0, 10);
    let second = value.slice(11, 12);
    let third = value.slice(12);
    let tranFrom = second.toUpperCase();
    let all = `${first}${tranFrom}${third}`

    return all;
};
// tranfrom(word);
console.log(tranfrom(word));