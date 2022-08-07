// const employees = {
//     john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
//     peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
//     mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
//     sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
//   };

//   //รับชื่อ
// let get = prompt("Enter name: ");

// //ถ้าตรง
// if(employees[get] == undefined) {
//     alert("notfound");
// }else {
//     alert(`name: ${get} 
//     salary: ${employees[get].salary} 
//     address:${employees[get].address.district}, 
//             ${employees[get].address.province}`)
// }

// console.log(employees[get]);


const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

//get name 
let get = prompt("Name: ");


//หลังรับชื่อแล้ว

//เช็คว่าตรงหรือไม่
//ถ้าไม่ตรง
if(employees[get] == undefined) {
  alert("Not found");
} /* ถ้าตรง */ else {
  alert(`Name: ${get} \n` +
        `salary: ${employees[get].salary} \n` +
        `address: ${employees[get].address.district}, ${employees[get].address.province}`);
}

console.log(employees[get]);