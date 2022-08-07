const product1 = { 
    name: 'Coke', 
    price: 18, 
    size: '500mL' 
};

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // * Pepsi
console.log(product2); // ** Pepsi
console.log(product1 === product2); // *** true