/* inchide/deshide burger meniul */
let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll-ul activ la navbar */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* inchiderea burger-ului cand apesi pe un element din navbar */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* animatii automate */
ScrollReveal({
    //reset: true, // sa fie mereu pe site sau doar cand intri prima data pe site
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home_content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home_img, .chat-container, .news-box, .chats-box', { origin: 'bottom' });
ScrollReveal().reveal('.home_content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home_content p, .about_content', { origin: 'right' });

/* multi text */
const typed = new Typed('.multiple-text', {
    strings: ['apeduct centralizat','canalizare centralizată','drenaj','hidroizolări','ape pluviale','oferirea proiectării și dare-n exploatare!'],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 100,
    loop: true
});

const accordion = document.getElementsByClassName('contentBx');
    for(i = 0; i<accordion.length; i++){
        accordion[i].addEventListener('click', function(){
            this.classList.toggle('active')
        })
    }
