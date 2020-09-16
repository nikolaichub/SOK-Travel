'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('working..');

    // smooth scroll and fancy scrollbar

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#wrapper"),
        smooth: true
    }); 

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#wrapper", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
    });

    /* //////////////////////////////////////////////////////////////// */

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


    window.addEventListener('resize', function (params) {
        marginToHotCarusel();
        calculatingSizeOfHoTCarusel();
    }); 

    let marginLeft_hotCarusel,
        scroll_hotCarusel,
        wrapper_hotCarusel = document.getElementById('hotCaruselWrapper'),
        wrapper_page = document.getElementById('wrapper');

    const marginToHotCarusel = () => {
        
        let container_hotCarusel = document.getElementById('hotContainer');
        
        marginLeft_hotCarusel = ( wrapper_page.clientWidth - container_hotCarusel.clientWidth ) / 2;
        wrapper_hotCarusel.style.setProperty("margin-left", `${marginLeft_hotCarusel}px`, null);
    }
    marginToHotCarusel();

    const calculatingSizeOfHoTCarusel = () => {
        
        let hotCaruselWidth = ( (wrapper_hotCarusel.firstElementChild.clientWidth + 20 ) * wrapper_hotCarusel.childElementCount );
        
        let containerGap_hotCarusel = wrapper_hotCarusel.clientWidth - marginLeft_hotCarusel;

        scroll_hotCarusel = hotCaruselWidth - containerGap_hotCarusel;
        
        //wrapper_hotCarusel.style.setProperty("transform", `translateX(-${scroll_hotCarusel}px)`, null);
    };
    calculatingSizeOfHoTCarusel();


    let scrollCarusel = gsap.timeline({
        scrollTrigger: {
            trigger: '#hot',
            start: 'top top',
            end: '400% bottom',
            pin: true,
            scrub: 0.5,
            scroller: "#wrapper",
            //markers: true
        }
    });

    scrollCarusel.to('#hotCaruselWrapper',{
        translateX: `-${scroll_hotCarusel}px`,
        ease: 'linear'
    });

    /* ////////////////////////////////////////////////////////////////////////////// */

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

});