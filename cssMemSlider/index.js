const slideSources = [
    {
        img: './assets/images/mem1.jpeg',
        text:`I'm ready to get hurt again!`,
    },
    {
        img: './assets/images/mem2.jpeg',
        text:`Make friends, make sales, make love - right order`,
    },
    {
        img: './assets/images/mem3.jpeg',
        text:`Create Mem`,
    },
    {
        img: './assets/images/mem4.jpeg',
        text:`What are mems?`,
    },
    {
        img: './assets/images/mem5.jpeg',
        text:`The world goes to hell - Not my problem`,
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

const loadFirstSlide = () => {
    
    slideImg.setAttribute('src', slideSources[0].img);
    slideImg.classList.add('animatedImg');
    slideText.innerHTML = slideSources[0].text;
    slideText.classList.add('animatedText');
    document.documentElement.style.setProperty('--textWidthCh', slideSources[0].text.length + 'ch');

    for (let i = 0; i < slideSources.length; i ++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(i));
        dots.appendChild(dot);
    }
    setTimeout(removeClassImg, 1000);
    setTimeout(removeClasstext, 4000);
}

const showSlide = (number) => {
    const arrayDots = document.getElementsByClassName('dot');

    document.documentElement.style.setProperty('--textWidthCh', 0 + 'ch');

    slideNumber = number;
    if (number > slideSources.length) {
        slideNumber = 0;
    }
    if (number < 0) {
        slideNumber = slideSources.length;
    }

    for(let i = 0; i < arrayDots.length; i++) {
        arrayDots[i].classList?.remove('active');
    }
    arrayDots[slideNumber].classList.add('active');
    
    const textWidthCss = slideSources[slideNumber].text.length;
    document.documentElement.style.setProperty('--textWidthCh', textWidthCss + 'ch');
 
    slideImg.setAttribute('src', slideSources[slideNumber].img);
    slideImg.classList.add('animatedImg');
    slideText.innerHTML = slideSources[slideNumber].text;
    slideText.classList.add('animatedText');
    setTimeout(removeClassImg, 1000);
    setTimeout(removeClasstext, 3000);
}

const removeClassImg = () => {
    slideImg.classList.remove('animatedImg');
}
const removeClasstext = () => {
    slideText.classList.remove('animatedText');
}

loadFirstSlide();