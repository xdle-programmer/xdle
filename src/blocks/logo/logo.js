function logoLoad(animationStart) {
    let $logo = document.getElementsByClassName('logo')[0];
    let transition = parseInt((window.getComputedStyle($logo).transitionDuration.split('s')[0]) * 1000);
    let logoLoadClass = 'logo--load';
    let logoFixedClass = 'logo--fixed';

    let timeLoadLogo = 0;
    let fixedLoadLogo = timeLoadLogo + transition + 500;

    if (!animationStart) {
        transition = 0;
        fixedLoadLogo = 0;
        $logo.style.transitionDuration = '0s';
    }

    timeoutCall($logo, logoLoadClass, timeLoadLogo);
    timeoutCall($logo, logoFixedClass, fixedLoadLogo);

    function timeoutCall(element, elementAddClass, time) {
        setTimeout(() => {
            element.classList.add(elementAddClass);
        }, time);
    }

    this.getDuration = function () {
        return fixedLoadLogo + transition;
    };
}

export {logoLoad};