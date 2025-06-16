gsap.registerPlugin(ScrollTrigger);

const headerAnimation = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".header-animation", {
        y: -100,
        opacity: 0,
        duration: 1.2
    })
    .from(".nav-animation", {
        opacity: 0,
        duration: 0.8,
        y: 20
    }, "-=0.8")
    .from(".brand-animation", {
        x: -50,
        opacity: 1,
        duration: 0.8
    }, "-=0.6")
    .from(".logo-animation", {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        rotate: -10
    }, "-=0.6")
    .from(".menu-animation li", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    }, "-=0.8")
    .from(".hero-animation", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    }, "-=0.8");
};

// Ejecutar la animación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", headerAnimation);