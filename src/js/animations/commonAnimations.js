import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCommonAnimations() {
    // Smooth scroll for anchor links (optional, CSS scroll-behavior: smooth also works)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) { // Check if it's not just "#" and element exists
                e.preventDefault();
                gsap.to(window, { duration: 0.8, scrollTo: { y: href, offsetY: 80 }, ease: "power2.inOut" }); // offsetY for fixed header
            }
        });
    });

    // Generic scroll-triggered animations for elements with .animate-on-scroll
    gsap.utils.toArray('.animate-on-scroll').forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%', // When the top of the trigger hits 85% of the viewport height
                    end: 'bottom 20%',
                    toggleActions: 'play none none none', // Play animation once when it enters viewport
                    // markers: true, // For debugging
                    delay: parseFloat(element.dataset.delay) || 0 // Use data-delay="0.2" for staggered effect
                }
            }
        );
    });

    // Header animation (e.g., slight shrink or background change on scroll)
    const header = document.querySelector('.site-header');
    if (header) {
        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "+=100", // After scrolling 100px
            toggleClass: { targets: header, className: "scrolled" },
            // markers: true,
            onUpdate: self => {
                if (self.isActive) {
                    gsap.to(header, { backgroundColor: 'rgba(26, 29, 36, 0.95)', duration: 0.3 }); // $dark-bg with more opacity
                } else {
                    gsap.to(header, { backgroundColor: 'rgba(26, 29, 36, 0.8)', duration: 0.3 }); // Initial $dark-bg
                }
            }
        });
    }
}