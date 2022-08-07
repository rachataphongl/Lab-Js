//รับ Fruit[key] : name[value] ใส่ลงใน Object
//ถ้ามีผลไม้มากกว่า 1 ผล ให้เติม s ด้วย


let get = () => {
    const fruit = {};

    do{
        key = prompt("Enter fruit's name:");
        value = prompt("amout: ");
        if(key !== 'end' && value !== "end") {
            fruit[key] = value;
        }
        if(value > 1 && (key !== "end" && value !== 'end')) {
            fruit[`${key}s`] = fruit[key];
            delete fruit[key];
        }
        if(value > 1 && (key !== "end" && value !== 'end')) {
            fruit[`${key}s`] = fruit[key];
            delete fruit[key];
        }
    }while(key !== "end" && value !== "end")
    console.log(fruit);
}
get();