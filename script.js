const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
    console.log(btn)
})


document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const item = document.createElement('li');
        item.innerText = input.value;
        if (input.value.length === 0) {
            return false;
            } //для того, что бы не вставлялись пустые строки в списке.
        list.appendChild(item);
        item.classList.add('added');
        input.value = '';
        item.addEventListener('click', () => {
            item.classList.toggle('completed');
        })
        item.addEventListener('dblclick', () => {
            list.removeChild(item);
        })
    }
})

btn.addEventListener('click', () => {
        const item = document.createElement('li');
        item.innerText = input.value;
        if (input.value.length === 0) {
            return false;
            } //для того, что бы не вставлялись пустые строки в списке.
        list.appendChild(item);
        item.classList.add('added');
        input.value = '';
        item.addEventListener('click', () => {
            item.classList.toggle('completed');
        })
        item.addEventListener('dblclick', () => {
            list.removeChild(item);
    })
})
