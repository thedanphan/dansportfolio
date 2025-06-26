let view = document.querySelector('#start');
let restart = document.querySelector('#replay');

let intro = document.querySelector('.intro');
let content = document.querySelector('.content');
let aboutme = document.querySelector('.aboutme');
let contactme = document.querySelector('.contactingme');

let aboutButton = document.querySelector('#memoi')
let contactButton = document.querySelector('#contact');
let titleScreen = document.querySelector('.title-screen');
let navButton = document.querySelector('#navbutton');

aboutButton.addEventListener('click', function(){
    aboutme.scrollIntoView({behavior: "smooth"});
});
contactButton.addEventListener('click', function(){
    contactme.scrollIntoView({behavior: "smooth"});
});
navButton.addEventListener('click', function(){
    titleScreen.scrollIntoView({behavior: "smooth"});
});