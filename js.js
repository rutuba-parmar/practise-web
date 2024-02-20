burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".nav-list");
rightnav = document.querySelector(".rightnav");
// navbar2 = document.querySelector(".height-nav");


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('visi');
    navlist.classList.toggle('visi');
    navbar.classList.toggle('h-nav');
})