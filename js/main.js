$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        margin: 30,
        dots: true,
        responsive: {
            320:{
                items:1
            },
            481:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
        }
    });
});


const topMenu = document.querySelector('.header__menu')
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click', () => {
    topMenu.classList.toggle('show-menu')
})

const menulinks = document.querySelectorAll('.header__menu li a')

menulinks.forEach(element => element.addEventListener('click', () => {
    topMenu.classList.remove('show-menu')
}))

