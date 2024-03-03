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

const divPortfolio = document.querySelector('.portfolio-container');

function generatePortfolio(imgSrc, href, nameSite){
    const divBox = document.createElement('div');
    divBox.classList.add('box');

    const divBoxImg = document.createElement('div');
    divBoxImg.classList.add('box-img');

    const img = document.createElement('img');
    img.setAttribute('src',imgSrc);

    const divContent = document.createElement('div') 
    divContent.classList.add('content');

    var a = document.createElement('a');
    a.setAttribute('href',href);
    a.setAttribute('target','_blank')

    var i = document.createElement('i');
    i.setAttribute('class','bx bx-link');
    a.appendChild(i);

    var h3 = document.createElement('h3');
    h3.innerText = nameSite;

    divContent.appendChild(a)
    divContent.appendChild(h3);

    divBoxImg.appendChild(img);

    divBox.appendChild(divBoxImg);
    divBox.appendChild(divContent);

    divPortfolio.append(divBox);
}

generatePortfolio('images/p12.PNG','https://rogeriodias.com.br/','Rogério Dias')
generatePortfolio('images/p5.PNG','https://murilonsantos17.github.io/Coffee-Web-Shop/','Loy Moda Feminina')
generatePortfolio('images/p9.PNG','https://ksturismo.com.br/','KS Turismo')
generatePortfolio('images/p13.PNG','https://mgoxidos.com.br/','MG Óxidos')
generatePortfolio('images/p2.PNG','https://www.lojabolachasvovoelza.com.br/','Loja Bolachas Vovó Elza')
generatePortfolio('images/p3.PNG','https://www.romanvs.com.br/','Romanvs Pizzaria')
generatePortfolio('images/p4.PNG','https://rodriguespenhasadvocacia.com.br/','Rodrigues Penha Advocacia')
generatePortfolio('images/p10.PNG','https://cgmcontroles.com.br/','CGM Controles')
generatePortfolio('images/p1.PNG','https://www.lojaluxurycloset.com.br/','Loja Luxury Closet')
generatePortfolio('images/p7.PNG','https://murilonsantos17.github.io/Super-Mario-World/','Super Mário Bross')
generatePortfolio('images/p8.PNG','https://murilonsantos17.github.io/Coffee-Web-Shop/','Coffee Web Shop')





