//This is the javascript file for my sign and login html 

const signInBtnLink = document.querySelector('signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');

const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
