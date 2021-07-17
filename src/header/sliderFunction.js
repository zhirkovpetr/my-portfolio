const  burger= document.querySelector('.headerBurger'),
    nav= document.querySelector('.navbar'),
    links= document.querySelectorAll('.navbar li');

function sliderFunction () {
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('navbarActive;');
        burger.classList.toggle('toggle');

        links.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation= '';
            } else {
                link.style.animation= `navLinksFade .5s ease forwards ${index/7 + 0.3}s`
            }
        })
    })
}