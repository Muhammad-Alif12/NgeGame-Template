const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener('click', () => {
    list.classList.toggle('active');
})