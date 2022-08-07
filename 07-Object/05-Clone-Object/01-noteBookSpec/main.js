// const notebook = {
//     brand: 'ASUS',
//     model: 'Vivobook D413IA-EB303TS',
//     processor: 'AMD Ryzen 7 4700U 3.6GHz',
//     graphics: 'Integrated Graphics : AMD Radeon Graphics',
//     ram: '8GB DDR4 Onboard',
//     storage: '512GB PCIe NVMe M.2 SSD'
// };

//#1
// const cloneNoteBook = {};

// for(let key in notebook) {
//     cloneNoteBook[key] =notebook[key];
// }
// console.log(cloneNoteBook);

//#2
// const cloneNoteBook = Object.assign({}, notebook);

// console.log(notebook);
// console.log(cloneNoteBook);


const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
};

const cloneObject = {};

for(let key in notebook) {
    cloneObject[key] = notebook[key]
}

console.log(cloneObject);