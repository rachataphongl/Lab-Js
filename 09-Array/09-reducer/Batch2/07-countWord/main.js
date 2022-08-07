let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce(function(acc, item, index, array) {
    //  สร้่าง obj เพื่อให้เป็น obj
    //ถ้า มีkey นี้แล้ว ให้เพิ่มvalue ไป 1
    //ถ้าไม่มีจะเป็น undefined ถ้าจะให้เข้าเงื่อนไข ต้อง !undefined
    if(!acc[item]){
        acc[item] = 1

    }else{
        acc[item] = acc[item] + 1
    }

    return acc;
}, {})

console.log(result);