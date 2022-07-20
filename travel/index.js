const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.adapt-menu');
const close = document.querySelector('#close-icon');
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

window.addEventListener('click', (ev) => {
    if (ev.target !== menu) {
        menu.classList.remove('adActive');
        ev.stopPropagation();
    }
})


/*      slider      */

const sliderLine = document.querySelector('.slider-line');
const sliderRight = sliderLine.lastElementChild;
const sliderLeft = sliderLine.firstElementChild;
const sliderMiddle = sliderLine.children[1];

const bullets = document.querySelector('.bullets');
const bulletL = bullets.firstElementChild;
const bulletR = bullets.lastElementChild;
const bulletM = bullets.children[1];

const arrowL = document.querySelector('.arrowLeft');
const arrowR = document.querySelector('.arrowRight');

sliderLeft.style.cursor = 'pointer';
sliderRight.style.cursor = 'pointer';
bulletM.style.opacity = '1';

let arrButtonsRight = [sliderRight, bulletR];
let arrButtonsLeft = [sliderLeft, bulletL];
let arrButtonsMiddle = [sliderMiddle, bulletM];

const imageSliderOne = document.querySelector('.imageSliderOne');

arrButtonsRight.forEach(item => item.addEventListener('click', () => {
    sliderLine.style.setProperty('--moveR', - imageSliderOne.clientWidth - (window.innerWidth / 100 * 3) + 'px');
    sliderLine.classList.add('sliderRight');
    sliderLine.classList.remove('sliderLeft');
    sliderRight.style.cursor = 'default';
    sliderMiddle.style.cursor = 'pointer';
    bulletM.style.opacity = '0.5';
    bulletL.style.opacity = '0.5';
    bulletR.style.opacity = '1';
    arrowL.style.opacity = '1';
    arrowR.style.opacity = '0.5';
}));

arrButtonsLeft.forEach(item => item.addEventListener('click', () => {
    sliderLine.style.setProperty('--moveL', imageSliderOne.clientWidth + (window.innerWidth / 100 * 3) + 'px');
    sliderLine.classList.add('sliderLeft');
    sliderLine.classList.remove('sliderRight');
    sliderMiddle.style.cursor = 'pointer';
    sliderLeft.style.cursor = 'default';
    bulletM.style.opacity = '0.5';
    bulletR.style.opacity = '0.5';
    bulletL.style.opacity = '1';
    arrowR.style.opacity = '1';
    arrowL.style.opacity = '0.5';
}));

arrButtonsMiddle.forEach(item => item.addEventListener('click', () => {
    sliderLine.classList.remove('sliderLeft');
    sliderLine.classList.remove('sliderRight');
    sliderLeft.style.cursor = 'pointer';
    sliderRight.style.cursor = 'pointer';
    sliderMiddle.style.cursor = 'default';
    bulletM.style.opacity = '1';
    bulletL.style.opacity = '0.5';
    bulletR.style.opacity = '0.5';
    arrowL.style.opacity = '1';
    arrowR.style.opacity = '1';
}));

arrowL.addEventListener('click', () => {
    sliderLine.style.setProperty('--moveL', imageSliderOne.clientWidth + (window.innerWidth / 100 * 3) + 'px');
    if (sliderLine.classList.contains('sliderRight')) {
        sliderLine.classList.remove('sliderRight');
        bulletM.style.opacity = '1';
        bulletL.style.opacity = '0.5';
        bulletR.style.opacity = '0.5';
        arrowL.style.opacity = '1';
        arrowR.style.opacity = '1';
    } else {
        sliderLine.classList.add('sliderLeft');
        bulletM.style.opacity = '0.5';
        bulletR.style.opacity = '0.5';
        bulletL.style.opacity = '1';
        arrowR.style.opacity = '1';
        arrowL.style.opacity = '0.5';
    }

});

arrowR.addEventListener('click', () => {
    sliderLine.style.setProperty('--moveR', - imageSliderOne.clientWidth - (window.innerWidth / 100 * 3) + 'px');
    if (sliderLine.classList.contains('sliderLeft')) {
        sliderLine.classList.remove('sliderLeft');
        bulletM.style.opacity = '1';
        bulletL.style.opacity = '0.5';
        bulletR.style.opacity = '0.5';
        arrowL.style.opacity = '1';
        arrowR.style.opacity = '1';
    } else {
        sliderLine.classList.add('sliderRight');
        bulletM.style.opacity = '0.5';
        bulletL.style.opacity = '0.5';
        bulletR.style.opacity = '1';
        arrowL.style.opacity = '1';
        arrowR.style.opacity = '0.5';
    }

});

window.addEventListener('resize', () => {
    sliderLine.style.setProperty('--moveR', - imageSliderOne.clientWidth - (window.innerWidth / 100 * 3) + 'px');
    sliderLine.style.setProperty('--moveL', imageSliderOne.clientWidth + (window.innerWidth / 100 * 3) + 'px');
})


/*      pop-up      */

const btnLogin = document.querySelector('.button__gray--login');
const popup = document.querySelector('.pop-up');
const popupContent = document.querySelector('.pop-up__content');

btnLogin.addEventListener('click', () => {
    popup.classList.toggle('hidden');
    popupContent.classList.toggle('pop-up__active');
});

popup.addEventListener('click', e => {
    if (!popupContent.contains(e.target) && !linkRegister.contains(e.target)) {
        popup.classList.toggle('hidden');
        popupContent.classList.toggle('pop-up__active');
    }
});

const accountLink = () => {
    popup.classList.toggle('hidden');
    popupContent.classList.toggle('pop-up__active');
}

const linkRegister = document.querySelector('.linkRegister');
const createLinkLogin = document.createElement('a');
createLinkLogin.innerHTML = '<a class="linkLogin" href="#">Log in</a>'

linkRegister.addEventListener('click', () => {
    document.querySelector('.btnFace').classList.toggle('hide-popup-fields');
    document.querySelector('.btnGoogle').classList.toggle('hide-popup-fields');
    document.querySelector('.hr').classList.toggle('hide-popup-fields');
    document.querySelector('.linkForgot').classList.toggle('hide-popup-fields');
    if (linkRegister.textContent === 'Log In') {
        document.querySelector('.header-login').textContent = 'Log in to your account';
        document.querySelector('.btnSign').value = 'Sign In';
        document.querySelector('.textToRegister').textContent = 'Don’t have an account? ';
        linkRegister.textContent = 'Register';
    } else {
        document.querySelector('.header-login').textContent = 'Create account';
        document.querySelector('.btnSign').value = 'Sign Up';
        document.querySelector('.textToRegister').textContent = 'Already have an account? ';
        linkRegister.textContent = 'Log In';
    }
});


const email = document.querySelector('.form__sign-in input[name="e-mail"]');
const pass = document.querySelector('.form__sign-in input[name="password"]');

document.querySelector('.btnSign').addEventListener('click', () => {
    alert(`Your email: ${email.value}\nYour password: ${pass.value}`);
});
