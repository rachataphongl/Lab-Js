//Error เพราะเจอ name มาประกาศในfunctionไม่ได้
//เพราะ     ค่าp paramiter ในfunction ถือว่าประกาศตัวแปรแล้ว

function sayHi(name) {
    let name = "Guest";
    console.log(name); // *
  }
  
  sayHi("Jim");