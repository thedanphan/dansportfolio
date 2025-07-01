let intro = document.querySelector('.intro')
let content = document.querySelector('.content');
let aboutme = document.querySelector('.aboutme');
let contactme = document.querySelector('.contactingme');

let aboutButton = document.querySelector('#memoi')
let contactButton = document.querySelector('#contact');
let titleScreen = document.querySelector('.title-screen');
let navButton = document.querySelector('#navbutton');

let inputName = document.querySelector('.inputt').value;
let inputEmail = document.querySelector('.emaill').value;
let inputMessage = document.querySelector('.messagee').value;

aboutButton.addEventListener('click', function(){
    content.scrollIntoView({behavior: "smooth"});
});
navButton.addEventListener('click', function(){
    intro.scrollIntoView({behavior: "smooth"});
});