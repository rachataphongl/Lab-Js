const product1 = {
    name: 'Water',
    distributor: {
        name: 'Giraffe Water Company',
        address: {
            stress: 'Phetchaburi',
            subdistrict: 'Thanonphetchaburi',
            district: 'Ratchathewi',
            province: 'Bangkok'
        }
    }
};
const product2 = {};
console.log(product1.distributor.address.province);
console.log(product2.distributor?.address?.province);