const arrayNum = [9, 17, 23, 5];
// ค่ามากกว่า 10
const resultNum = arrayNum.filter(function(item, index, arr) {
    if(item > 10) {
        return true
    }else{
        return false //ไม่เอา item นั้น
    }
})
console.log(resultNum);

//2
const arrayInt = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const resultInt = arrayInt.filter(function(item, index, arr) {
    if(item % 2 !== 0) {
        return true
    }else {
        return false
    }
})
console.log(resultInt);

//3
const arrayMix = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const resultMix = arrayMix.filter((item) => typeof(item) == 'number')
console.log(resultMix);

//4
const arrayFruits = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
const resultFruits = arrayFruits.filter(item => item.length > 6)

//5
const array = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
