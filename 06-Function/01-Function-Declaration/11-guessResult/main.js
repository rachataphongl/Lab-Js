// * รายละเอียด function sayHi
//** Hi kid // alert Hi kid แต่logเป็น undefined
//*** alert John แต่ loc มาเป็น  undefined เพราะ return เปล่า
//**** Who are you 

// function sayHi(age) {
//     if (age < 12) alert("Hi kid");
//   }
//   console.log(sayHi); // *
//   console.log(sayHi(10)); // **
//   ```
  
//    ```
  function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;
    } else {
      return "Who are you";
    }
  }
//   console.log(sayHi("John")); // ***
  console.log(sayHi()); // ****