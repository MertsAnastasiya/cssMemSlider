const slideSources = [
    {
        img: './assets/images/mem1.jpeg',
        text:`I'm ready to get hurt again`,
    },
    {
        img: './assets/images/mem2.jpeg',
        text:`Mem 2`,
    },
    {
        img: './assets/images/mem3.jpeg',
        text:`Mem 3`,
    },
];

let slideNumber = 0;
const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');

document.documentElement.style.setProperty('--textWidthCh', slideSources[0].text.length + 'ch');
document.documentElement.style.setProperty('--textWidth', slideSources[0].text.length);

const showSlide = (number) => {
    slideNumber = number;
    if (number > slides.length) {
        slideNumber = 0;
    }
    if (number < 0) {
        slideNumber = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        const textWidthCss = slides[i].children[1].innerHTML.length
        document.documentElement.style.setProperty('--textWidthCh', textWidthCss + 'ch');
        document.documentElement.style.setProperty('--textWidth', textWidthCss);
        
        if (i === slideNumber) {
            slides[i].classList?.remove('invisible');
            dots[i].classList.add('active');
        } else {
            slides[i].classList.add('invisible');
            dots[i].classList?.remove('active');
        }
    }
}
