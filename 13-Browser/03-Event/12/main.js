const btnAdd =document.querySelector('.btn-add') 
btnAdd.addEventListener('click', function() {
    const input = document.querySelector('input');
    const newValue = input.value;
    const hmtl = `<li><span><${newValue}</span><button class="btn-edt">edit</button><button class="btn-del">delete</button></li>`;
    const ul = document.querySelector('ul');
    ul.insertAdjacentHTML('beforeend', hmtl);
})