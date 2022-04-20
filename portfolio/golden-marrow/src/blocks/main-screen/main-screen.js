let mainScreen = document.getElementsByClassName('main-screen')[0];

// Отслеживаем "пробег" мыши
mainScreen.addEventListener('mousemove', checkMouseSpeed);

let lastMouseX = -1;
let lastMouseY = -1;
let lastMouseTime;
let mouseTravel = 0;

function checkMouseSpeed(event) {
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    if (lastMouseX > -1)
        mouseTravel += Math.max(Math.abs(mouseX - lastMouseX), Math.abs(mouseY - lastMouseY));
    lastMouseX = mouseX;
    lastMouseY = mouseY;
}

// Вычисляем скорость мыши
let mouseSpeed = 0;

let mouseSpeedTimer = setInterval(function () {
    let lastMouseTravel = mouseTravel;

    setTimeout(function () {
        mouseSpeed = mouseTravel - lastMouseTravel;
    }, 50);
}, 50);

let angle = 0;
let orbits = document.getElementsByClassName('main-screen__orbit-rotate');
let minAngle = 2;
let shiftAngle = 0;

function rotateOrbit() {

    let shiftAngleTimer = setInterval(function () {
        let slowShift = .3;

        if (shiftAngle < minAngle + slowShift) {
            shiftAngle = minAngle;
        } else {
            shiftAngle -= slowShift;
        }
    }, 30);


    let rotationTimer = setInterval(function () {


        if (mouseSpeed !== 0) {
            shiftAngle += mouseSpeed / 40;
        }

        angle += shiftAngle;

        for (let i = 0; i < orbits.length; i++) {
            orbits[i].style.transform = 'rotate(' + angle + 'deg)';
        }
    }, 150);


}

rotateOrbit();


let parallaxElements = [
    'main-screen__planet-big',
    'main-screen__planet-small',
    'main-screen__planet-free',
    'main-screen__planet-star--1',
    'main-screen__planet-star--2',
    'main-screen__planet-star--3',
    'main-screen__planet-star--4',
    'main-screen__planet-star--5'
];


window.addEventListener('scroll', parallaxMainScreen);

function parallaxMainScreen() {
    if (window.scrollY < 3000) {
        let opacity = 1 - window.scrollY / 500;

        if (opacity < 0) {
            opacity = 0;
        }

        for (let i = 0; i < parallaxElements.length; i++) {
            let element = document.getElementsByClassName(parallaxElements[i])[0];

            if (element) {
                element.style.transform = 'translateY(' + window.scrollY * ((i + 1) / 20) * 5 + 'px)';
                element.style.opacity = opacity;
            }
        }
    }


}
