console.log('1. 48\n2. 15\n3. 22');
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.adapt-menu');
const close = document.querySelector('#close-icon');
const preview = document.querySelector('.preview');
const steps = document.querySelector('.steps');
const links = document.querySelector('.ad-links');

close.addEventListener('click', (ev) => {
    menu.classList.remove('adActive');
});

links.addEventListener('click', (ev) => {
    menu.classList.remove('adActive');
});



hamburger.addEventListener("click", function (ev) {
    menu.classList.add('adActive');
    ev.stopPropagation();
}, false);

preview.addEventListener("click", function (ev) {
    menu.classList.remove('adActive');
    ev.stopPropagation();
}, false);

steps.addEventListener("click", function (ev) {
    menu.classList.remove('adActive');
    ev.stopPropagation();
}, false);


