const accordion = document.getElementsByClassName('contentBx');
    for(i = 0; i<accordion.length; i++){
        accordion[i].addEventListener('click', function(){
            this.classList.toggle('active')
        })
    }

    ScrollReveal({
        //reset: true, // sa fie mereu pe site sau doar cand intri prima data pe site
        distance: '80px',
        duration: 2000,
        delay: 200
    });
    
    ScrollReveal().reveal('.home_content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home_content p, .about_content', { origin: 'right' });