//get name[key]:num[value]
//get price[value]: discount[value%]
//function cal price -discount

let get = () => {
    let s = 's';
    let allProduct = {};
    let vat = {};

    do {
        name = prompt("Name: ");
        num = +prompt("Amout: ");
        price = +prompt("Price: ");
        disCount = +prompt("Discount: ");

        if (name !== s && num !== s && disCount !== s && price !== s && disCount !== NaN) {
            

            allProduct['price'] = price;
            allProduct['total'] = price;
            if(disCount > 0 || disCount == NaN){
                allProduct['discount'] =  disCount + "%";
                dcPrice = ((price - ((disCount / 100) * price)) * num).toFixed(2);
                allProduct['total'] = Number(dcPrice);
                // delete allProduct['price'];
            }else{
                allProduct['total'] = price * num;
            }
            allProduct[name] = num;
            
            // console.log(dcPrice);
            // console.log(vat);
            console.log(allProduct);
        }

    } while (name !== s && num !== s && price !== s)
}
get();