let view = document.querySelector('#start');
let restart = document.querySelector('#replay');

let intro = document.querySelector('.intro');
let content = document.querySelector('.content');
let aboutme = document.querySelector('.aboutme');
let aboutButton = document.querySelector('#memoi')

let titleScreen = document.querySelector('.title-screen');

aboutButton.addEventListener('click', function(){
    aboutme.scrollIntoView({behavior: "smooth"});
});