let projectun = document.querySelector('.project1');
let projectdeux = document.querySelector('.project2');
let projecttrois = document.querySelector('.project3');
let descript = document.querySelector('#descriptions');

projectun.addEventListener('mousemove', function(){
    descript.innerHTML = "This is my Website for Good! It discusses the improper and straining use of AI upon commercials and social media. This website introduced me the fundamentals of HTML and CSS and the application of it!";
    descript.style.fontSize = "31px";
    descript.style.lineHeight = "130%";
})
projectdeux.addEventListener('mousemove', function(){
    descript.innerHTML = "This is my text adventure game! It is supposed to replicate the Oregon Trail; however, it is much simplier and has only happy endings! This project allowed me to see the fundamentals of javascript and also furthered my design skills!";
    descript.style.fontSize = "31px";
    descript.style.lineHeight = "115%";
})
projecttrois.addEventListener('mousemove', function(){
    descript.innerHTML = "This is my buzzfeed game! This deteremines simply based on your habits if you are locked in or cooked! This overall project allowed me to put together my developed HTML, CSS, and Javascript skills up to this point and allow me to create a silly game!";
    descript.style.fontSize = "31px";
    descript.style.lineHeight = "115%";
})
projectun.addEventListener('mouseout', function(){
    descript.innerHTML="Hover over a project to see the description!"
    descript.style.fontSize = "31px";
    descript.style.textAlign = "center";
});
projectdeux.addEventListener('mouseout', function(){
    descript.innerHTML="Hover over a project to see the description!"
    descript.style.fontSize = "31px";
    descript.style.textAlign = "center";
});
projecttrois.addEventListener('mouseout', function(){
    descript.innerHTML="Hover over a project to see the description!"
    descript.style.fontSize = "31px";
    descript.style.textAlign = "center";
});
projectun.addEventListener('click', function(){
    window.open('https://thedanphan.github.io/int-u2-project-23-24-starter-code-2/');
});
projectdeux.addEventListener('click', function(){
    window.open('https://thedanphan.github.io/int-u3-project-starter-code/');
});
projecttrois.addEventListener('click', function(){
    window.open('https://thedanphan.github.io/int-u4-project-23-24-starter-code/');
});