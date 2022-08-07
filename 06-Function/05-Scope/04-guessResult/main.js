let x = 1;
function func() {
    console.log(x); // * 2 // x is noy undefined หา x มี x ในfunction จริง แต่ประกาศหลัง เรียกใช้งาน
    let x = 2;
}
func();