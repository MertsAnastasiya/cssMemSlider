let slideNumber = 0;
const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');

const showSlide = (number) => {
    slideNumber = number;
    if (number > slides.length) {
        slideNumber = 0;
    }
    if (number < 0) {
        slideNumber = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        console.log('slideNumber = ' + slideNumber);
        if (i === slideNumber) {
            slides[i].classList?.remove('invisible');
            dots[i].classList.add('active');
        } else {
            slides[i].classList.add('invisible');
            dots[i].classList?.remove('active');
        }
    }
}
