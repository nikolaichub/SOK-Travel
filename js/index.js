document.addEventListener('DOMContentLoaded', function () {
    console.log('working..');

    let startCard1 = document.getElementById('startCard1'),
        startCard2 = document.getElementById('startCard2'),
        startCard3 = document.getElementById('startCard3');

    document.addEventListener('mousemove', e => {
        let mouseX = e.clientX / 100;
        let mouseY = e.clientY / 100;
    
        startCard1.style.transform = `translate(calc(0% + ${mouseX}px), calc(-50% + ${mouseY}px))`;
        startCard2.style.transform = `translate(calc(0% - ${mouseX}px), calc(-50% + ${mouseY}px))`;
        startCard3.style.transform = `translate(calc(0% - ${mouseX}px), calc(-50% - ${mouseY}px))`;
    });

});