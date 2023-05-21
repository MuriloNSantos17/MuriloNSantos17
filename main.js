let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let header = document.querySelector('header')


menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navBar.classList.remove('active');
}

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
})

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.home-text',{delay: 200, origin: 'top'});
sr.reveal('.home-img',{delay: 400, origin: 'top'});
sr.reveal('.about-title , about-text, heading ,.box',{delay: 200, origin: 'top'});