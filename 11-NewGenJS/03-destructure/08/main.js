let info = {
    firstName: "rachataphong",
    lastName: "Leethaweesuk",
    age: 8
}

function check(info) {
    let {age, firstName, lastName} = info;
    if(age < 18) {
        console.log(age)
       return alert(`Hi, ${firstName} ${lastName} ไม่มีสิทธิเข้าใช้งาน`)
    }

}
check(info);