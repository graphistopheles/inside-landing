document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Navbar height
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Import Bootstrap's JS (all or specific components)
// Option 1: Import all of Bootstrap JS (includes Popper)
import 'bootstrap';

// Option 2: Import only necessary Bootstrap JS components
// import { Collapse, Dropdown, Carousel } from 'bootstrap'; // Example

// Import GSAP and ScrollTrigger (already linked via CDN in HTML, but can be bundled)
// If you installed gsap via npm:
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger); // Register plugin if importing via npm

// Import page-specific animations or component scripts
import { initHomeAnimations } from './animations/homeAnimations.js';
import { initCommonAnimations } from './animations/commonAnimations.js';
import './animations/headerAnimation.js';
// import { initCodeEditor } from './components/codeEditor.js'; // If you have a JS component for it

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Initialize common animations (e.g., for header, footer, scroll-triggered elements)
    initCommonAnimations();

    // Initialize animations specific to the current page
    // Simple check for body class or a specific element to determine the page
    if (document.body.classList.contains('home-page-identifier')) { // Add this class to <body> in index.html
        initHomeAnimations();
    }
    // else if (document.body.classList.contains('about-page-identifier')) {
    //     initAboutAnimations();
    // }

    // Initialize other components
    // initCodeEditor(); // Example

    // Example: Initialize Bootstrap components if needed manually
    // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new Tooltip(tooltipTriggerEl);
    // });
});

// Add a class to body in index.html for page specific JS:
// <body class="dark-theme home-page-identifier">