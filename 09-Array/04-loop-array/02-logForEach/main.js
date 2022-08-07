const names = ['Mike', 'Sid', 'Jack', 'Bill'];

let evrName = (item, index, array) => {
    console.log(`${index + 1}. ${item}`);
}

names.forEach(evrName);