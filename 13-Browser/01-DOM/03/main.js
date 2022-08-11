const li = document.querySelector('ul li:last-child');
console.log(li.innerHTML);

const li1 = document.querySelectorAll('ul li:last-child');
for(let elme of li1) {
    console.log(elme.innerHTML);
}


const li2 = document.getElementById('3');
console.log(li2.innerHTML);
console.log(li2.innerText);

const li4 = document.getElementsByTagName('li')[2];
console.log(li4.innerHTML);