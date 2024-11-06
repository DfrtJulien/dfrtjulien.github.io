const btn = document.getElementById('button-clicker');
const total = document.getElementById('total');

let count = 0;

btn.addEventListener('click', () => {
    count++
    total.innerText = count
})
