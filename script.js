let view = document.querySelector('#start');
let restart = document.querySelector('#replay');

let titleScreen = document.querySelector('.title-screen');
let saveScreen = document.querySelector('.saves');

view.addEventListener('click', function(){
    titleScreen.style.display = "none";
    saveScreen.style.display = "block";
});