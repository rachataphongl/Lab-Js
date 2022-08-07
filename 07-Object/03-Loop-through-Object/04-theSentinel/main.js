// let get = prompt("Enter words:");

// const allWord = {};
// const THE_SENTINEL = 'stop';
// function CreatObjectFromUserInput() {
//     const result = {};
    
//     //mofifind obj
//     let key;
//     let value;
//     do {
//         key = prompt("Enter key");
//         value = prompt("Enter value");
//         if(key !== null && key.trim !== '' &&(key !== THE_SENTINEL && value !== THE_SENTINEL)){
//             //update ได้
//             result[key] = value;
//         }
//     }while(key !== THE_SENTINEL && value !== THE_SENTINEL)

//     return result;
// }
// let user = cancelAnimationFrame();
// console.log(user);



//รับค่า มา 2 ตัว key : value
//เช็คว่่า null หรือ '' มั้ย
//เช็คว่า ค่าทั้ง 2 ค่า เป็น 'stop' มั้ย
//เก็บค่าไว้ใน obj จนกว่าจะผิดเงื่อนไข

let get = () => {
    let result = {};

    do {
        key = prompt("Your Key: ");
        value = prompt("Your Value: ");
        // console.log(key);
        // console.log(value);
        if(key !== null && key.trim() !== '' &&(key !== 'stop'&& value !== 'stop')) {
            result[key] = value;
        }
    }
    while(key !== 'stop' && value !== 'stop');
    console.log(result);
}
get();


