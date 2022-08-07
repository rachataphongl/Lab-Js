//* isActive เปลี่ยนจาก true เป็น false เพราะเปลี่ยนค่าใหม่
//** {} เพราะยังไม่ได้ดำหนดค่าอะไร ผิดด เพราะจะ error เพราะuser เป็น const เปลี่ยนค่าไม่ได้
const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // *
  user = {};
  console.log(user); // **

  const drem = function() {}