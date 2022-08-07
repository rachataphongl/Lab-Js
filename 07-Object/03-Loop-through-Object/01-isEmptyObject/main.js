//Input: Obj ที่ใช้ตรวจสอบ
//Output: true == Objectว่าง ไม่มี key , false    == object มีอย่างน้อย 1 key 

function   isEmptyOblect(obj) {
    //เข้า for loop เมื่อ obj มี 1 key ขึ้นไป
    for(let key in obj) {
        return false + ' Have propertr';
    }
    //มีเฉพาะ 0 key ที่หลุดมาได้
    return true + ' Empty';
}

const user_1 = {name: "CC12"};
const user_2 = {name: "Codecamp", cohort: 12};
const user_3 = {};
console.log(isEmptyOblect(user_1));
console.log(isEmptyOblect(user_2));
console.log(isEmptyOblect(user_3));