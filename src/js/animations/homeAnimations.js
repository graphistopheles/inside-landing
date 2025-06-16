import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin"; // For text animations if needed
// gsap.registerPlugin(TextPlugin);

export function initHomeAnimations() {
    console.log('Initializing Home Page Animations');

    // Hero section load animations
    const heroTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    heroTimeline
        .fromTo(".hero-title.animate-on-load", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5, stagger: 0.5 })
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

 // Logos Clientes

 gsap.registerPlugin(ScrollTrigger);

 const tl = gsap.timeline({
   scrollTrigger: {
     trigger: ".features-section",  // El elemento que activa la animación
     start: "top 50%",            // Cuando el top del elemento llega al 80% del viewport
     once: true                   // Solo se ejecuta una vez
   }
 });
 
 tl.fromTo(".features-section .section-title", 
   { opacity: 0, y: 30 }, 
   { opacity: 1, y: 0, duration: 0.8 }
 )
 .fromTo(".client-logo", 
   { opacity: 0, y: 20, scale: 0.8 }, 
   { 
     opacity: 1, 
     y: 0, 
     scale: 1, 
     duration: 0.6,
     stagger: 0.15,
     ease: "back.out(1.7)"
   }, 
   "-=0.3"
 );

 const tlServices = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 50%",
      once: true
    }
  });

  // Services
  // 1. Fondo con efecto de "reveal"
  tlServices.fromTo(".services-section", 
    { opacity: 0, scale: 1.05 }, 
    { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
  )
  
  // 2. Contenido aparece después
  .fromTo(".services-section .section-title", 
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 0.8 }, 
    "-=0.4"
  )
  
  // 3. Cards en grid
  .fromTo(".service-card", 
    { opacity: 0, y: 60, rotationX: 15 }, 
    { 
      opacity: 1, 
      y: 0, 
      rotationX: 0,
      duration: 1,
      stagger: {
        amount: 0.8,
        grid: [2, 2],  // Si tienes 2x2 grid
        from: "start"
      },
      ease: "power3.out"
    }, 
    "-=0.2"
  );

  // Hover effects para las cards
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        duration: 0.3, 
        ease: "power2.out" 
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { 
        y: 0, 
        scale: 1,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        duration: 0.3, 
        ease: "power2.out" 
      });
    });
  });

  // Blog

  gsap.registerPlugin(ScrollTrigger);

const tlBlog = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog-section",
    start: "top 90%",
    once: true
  }
});

// 1. Badge "Nuestro blog" con ícono
tlBlog.fromTo(".blog-badge", 
  { opacity: 0, x: -30 }, 
  { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
)

// 2. Título principal
.fromTo(".blog-title", 
  { opacity: 0, y: 30 }, 
  { opacity: 1, y: 0, duration: 0.8 }, 
  "-=0.3"
)

// 3. Descripción
.fromTo(".blog-description", 
  { opacity: 0, y: 20 }, 
  { opacity: 1, y: 0, duration: 0.8 }, 
  "-=0.4"
)

// 4. Botón "Ver Más"
.fromTo(".blog-cta-button", 
  { opacity: 0, scale: 0.8 }, 
  { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, 
  "-=0.3"
)

// 5. Cards del blog (efecto cascada)
.fromTo(".blog-card", 
  { opacity: 0, y: 60, rotationY: 15 }, 
  { 
    opacity: 1, 
    y: 0, 
    rotationY: 0,
    duration: 0.8,
    stagger: 0.4,  // Cada card aparece 0.2s después
    ease: "power3.out"
  }, 
  "-=0.4"
);

// Certificaciones

gsap.registerPlugin(ScrollTrigger);

const tlCertificaciones = gsap.timeline({
  scrollTrigger: {
    trigger: ".certifications-section",
    start: "top 90%",
    once: true
  }
});

// 1. Badge "Certificaciones"
tlCertificaciones.fromTo(".cert-badge", 
  { opacity: 0, x: -30 }, 
  { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
)

// 2. Título principal
.fromTo(".cert-title", 
  { opacity: 0, y: 30 }, 
  { opacity: 1, y: 0, duration: 0.8 }, 
  "-=0.3"
)

// 3. Primera card (con texto y logos)
.fromTo(".cert-card-1", 
  { opacity: 0, x: -50, rotationY: -15 }, 
  { opacity: 1, x: 0, rotationY: 0, duration: 1, ease: "power3.out" }, 
  "-=0.2"
)

// 4. Logos de la primera card (aparecen escalonados)
.fromTo(".cert-card-1 .cert-logo", 
  { opacity: 0, scale: 0.5, rotation: 180 }, 
  { 
    opacity: 1, 
    scale: 1, 
    rotation: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)"
  }, 
  "-=0.5"
)

// 5. Segunda card
.fromTo(".cert-card-2", 
  { opacity: 0, x: 50, rotationY: 15 }, 
  { opacity: 1, x: 0, rotationY: 0, duration: 1, ease: "power3.out" }, 
  "-=0.4"
)

// 6. Logos de la segunda card (grid de logos)
.fromTo(".cert-card-2 .cert-logo", 
  { opacity: 0, y: 30, scale: 0.8 }, 
  { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    duration: 0.7,
    stagger: {
      amount: 0.8,
      grid: [3, 3], // Si tienes 3x3 grid
      from: "center"
    },
    ease: "power2.out"
  }, 
  "-=0.6"
);
// Contacto

gsap.registerPlugin(ScrollTrigger);

const tlContacto = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 50%",
    once: true
  }
});

// 1. Título "Contacto" con ícono
tlContacto.fromTo(".contact-title", 
  { opacity: 0, x: -30 }, 
  { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
)

// 2. Descripción principal
.fromTo(".contact-description", 
  { opacity: 0, y: 20 }, 
  { opacity: 1, y: 0, duration: 0.8 }, 
  "-=0.3"
)

// 3. Formulario (lado izquierdo)
.fromTo(".contact-form", 
  { opacity: 0, x: -50, rotationY: -10 }, 
  { opacity: 1, x: 0, rotationY: 0, duration: 1, ease: "power3.out" }, 
  "-=0.4"
)

// 4. Campos del formulario (aparecen secuencialmente)
.fromTo(".form-field", 
  { opacity: 0, y: 30 }, 
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  }, 
  "-=0.6"
)

// 5. Cards de información de contacto
.fromTo(".contact-info-card", 
  { opacity: 0, y: 40, scale: 0.9 }, 
  { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.2)"
  }, 
  "-=0.8"
)

// 6. Sección de información adicional
.fromTo(".additional-info", 
  { opacity: 0, y: 30 }, 
  { opacity: 1, y: 0, duration: 0.8 }, 
  "-=0.5"
)

// 7. Botón de envío (con efecto especial)
.fromTo(".submit-button", 
  { opacity: 0, scale: 0.8 }, 
  { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, 
  "-=0.4"
);

// Footer
const footerTl = gsap.timeline({
    scrollTrigger: {
        scrollTrigger: {
            trigger: ".footer-anim",
            start: "bottom-=10%", // Cuando el 90% del footer entra en el viewport desde abajo
            // markers: true, // Descomentar para ver los marcadores de ScrollTrigger
            once: true // Reproducir solo una vez
        }
    }
  });

  // 1. Logo del footer
  footerTl.fromTo(".footer-logo",
    { opacity: 0, y: 40 }, // Estado inicial: transparente, 40px hacia abajo
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" } // Estado final: opaco, posición original
);

// 2. Descripción del footer
footerTl.fromTo(".footer-description",
    { opacity: 0, y: 30 }, // Estado inicial: transparente, 30px hacia abajo
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "-=0.5" // Inicia 0.5 segundos antes de que termine la animación anterior
);

// 3. Campo de email (input)
footerTl.fromTo(".newsletter-form input",
    { opacity: 0, x: 30 }, // Estado inicial: transparente, 30px hacia la derecha
    { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
    "-=0.4" // Inicia 0.4 segundos antes
);

// 4. Botón "Trabaja con Nosotros"
footerTl.fromTo(".btn-work-with-us",
    { opacity: 0, x: 30, scale: 0.9 }, // Estado inicial: transparente, 30px derecha, ligeramente pequeño
    { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: "back.out(1.2)" }, // Estado final: opaco, posición original, tamaño original con rebote
    "-=0.4" // Inicia 0.4 segundos antes, junto al input
);

// 5. Texto de Copyright
footerTl.fromTo(".footer-copyright",
    { opacity: 0, y: 20 }, // Estado inicial: transparente, 20px hacia abajo
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    "-=0.3" // Inicia 0.3 segundos antes
);

// 6. Enlaces inferiores (LinkedIn, Políticas de Privacidad)
footerTl.fromTo(".footer-links a",
    { opacity: 0, y: 20 }, // Estado inicial: transparente, 20px hacia abajo
    {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15, // Retraso escalonado entre los enlaces
        ease: "power2.out"
    },
    "-=0.5" // Inicia 0.5 segundos antes, para que parezca que los enlaces y el copyright aparecen casi juntos
);