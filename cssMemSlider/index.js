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
const slide = document.getElementById('slide');
const dots = document.getElementById('dots');

const slideImg = document.createElement('img');
slideImg.classList.add('slide-img');

const slideText = document.createElement('p');
slideText.classList.add('slide-text');

slide.appendChild(slideImg);
slide.appendChild(slideText);

document.documentElement.style.setProperty('--textWidthCh', slideSources[0].text.length + 'ch');
document.documentElement.style.setProperty('--textWidth', slideSources[0].text.length);


const loadFirstSlide = () => {
    
    slideImg.setAttribute('src', slideSources[0].img);
    slideImg.classList.add('animatedImg');
    slideText.innerHTML = slideSources[0].text;

    for (let i = 0; i < slideSources.length; i ++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(i));
        dots.appendChild(dot);
    }
    setTimeout(removeClass, 1000);
}

const showSlide = (number) => {
    slideNumber = number;
    if (number > slideSources.length) {
        slideNumber = 0;
    }
    if (number < 0) {
        slideNumber = slideSources.length;
    }
    const textWidthCss = slideSources[slideNumber].text.length;
    document.documentElement.style.setProperty('--textWidthCh', textWidthCss + 'ch');
    document.documentElement.style.setProperty('--textWidth', textWidthCss);
    
    slideImg.setAttribute('src', slideSources[slideNumber].img);
    slideImg.classList.add('animatedImg');
    slideText.innerHTML = slideSources[slideNumber].text;
    setTimeout(removeClass, 1000);
}

const removeClass = () => {
    slideImg.classList.remove('animatedImg');
}

loadFirstSlide();