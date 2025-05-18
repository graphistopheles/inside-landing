import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin"; // For text animations if needed
// gsap.registerPlugin(TextPlugin);

export function initHomeAnimations() {
    console.log('Initializing Home Page Animations');

    // Hero section load animations
    const heroTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    heroTimeline
        .fromTo(".hero-title.animate-on-load", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 })
        .fromTo(".hero-subtitle.animate-on-load", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".interactive-code-editor.animate-on-load", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.7 }, "-=0.4")
        .fromTo(".hero-cta.animate-on-load", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");

    // Interactive code editor animation (placeholder for typing effect)
    const codeEditor = document.querySelector('.interactive-code-editor pre code');
    if (codeEditor) {
        const originalCode = codeEditor.textContent;
        // Simple reveal, or use TextPlugin for typing effect
        gsap.fromTo(codeEditor, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, delay: 1.5, 
              onStart: () => {
                // Example: if you want to simulate typing, you'd clear text and use TextPlugin
                // codeEditor.textContent = '';
                // gsap.to(codeEditor, {duration: 2, text: originalCode, ease: "none"});
              }
            }
        );
    }

    // Hover animations for feature cards (can also be done with CSS)
    const featureCards = gsap.utils.toArray('.feature-card');
    featureCards.forEach(card => {
        gsap.timeline({ paused: true })
            .to(card, { y: -8, scale: 1.03, duration: 0.3, ease: "power1.inOut" })
            .to(card.querySelector('.feature-icon'), { rotation: 15, duration: 0.3, ease: "power1.inOut" }, 0); // Example icon animation

        card.addEventListener('mouseenter', () => card.timeline.play());
        card.addEventListener('mouseleave', () => card.timeline.reverse());
    });
    // Initialize card timelines
    featureCards.forEach(card => card.timeline = gsap.timeline({ paused: true })
        .to(card, { y: -8, scale: 1.03, duration: 0.3, ease: "power1.inOut" })
        // .to(card.querySelector('.feature-icon'), { rotation: 15, duration: 0.3, ease: "power1.inOut" }, 0) // Optional icon animation
    );


    // Pricing cards hover (similar to feature cards)
    const pricingCards = gsap.utils.toArray('.pricing-card');
    pricingCards.forEach(card => {
        card.timeline = gsap.timeline({ paused: true })
            .to(card, { y: -10, scale: 1.02, boxShadow: "0px 10px 25px rgba(102, 255, 204, 0.2)", duration: 0.3, ease: "power1.inOut" });

        card.addEventListener('mouseenter', () => card.timeline.play());
        card.addEventListener('mouseleave', () => card.timeline.reverse());
    });

    // Testimonial slider (basic fade-in for now, a real slider needs more logic or a library)
    // This is just a placeholder for a more complex slider animation
    gsap.from(".testimonial-item", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".testimonial-slider",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}