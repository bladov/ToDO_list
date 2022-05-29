const text = document.querySelector('#text');
const createBtn = document.querySelector('.create__btn');
const list = document.querySelector('.list');


const deleteBtn = document.querySelector('.delete__btn');

createBtn.addEventListener('click', () => {
    if (!text.value) return;

    const createItem = (str) => {

        const item = document.createElement('li');
        item.classList.add('item');

        const descriptoin = document.createElement('p');
        descriptoin.classList.add('descriptoin');
        descriptoin.textContent = str;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete__btn');
        deleteBtn.textContent = 'delete';

        item.append(descriptoin, deleteBtn);
        list.append(item)
    }

    createItem(text.value);
    text.value = '';
});

list.addEventListener('click', (e) => {
    let li = e.target.closest('li')
   if (e.target.classList != 'delete__btn') {
        return
   }
    
    let children = list.children;
   for (let i = 0; i < children.length; i++) {
       if (children[i].contains(li)) {
        children[i].remove()
        return
       }
   }
});

