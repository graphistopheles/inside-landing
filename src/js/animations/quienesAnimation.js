gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const heroLeft = heroSection.querySelector('.hero-left');
    const heroSubtitle = heroLeft.querySelector('.hero-subtitle');
    const heroTitle = heroLeft.querySelector('.hero-title');
    const heroTitleEmphasis = heroTitle.querySelector('.hero-title-emphasis');
    const heroDescription = heroLeft.querySelector('.hero-description');
    // const heroButton = heroLeft.querySelector('.hero-button'); // Si hubiera botón
    const heroImage = heroSection.querySelector('.hero-right .hero-image');

    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: heroSection,
            start: "top top+=100", // Inicia cuando la parte superior de la sección alcanza la parte superior del viewport + 100px (ajusta según necesites)
            // markers: true, // Para visualizar los triggers
            once: true
        }
    });

    // 1. Subtítulo (Quienes Somos)
    heroTl.fromTo(heroSubtitle,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // 2. Título principal
    heroTl.fromTo(heroTitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4" // Inicia un poco antes que termine el subtítulo
    );

    // 3. Palabra destacada del título (opcional, si quieres animarla diferente)
    if (heroTitleEmphasis) {
        heroTl.fromTo(heroTitleEmphasis,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.2)" },
            "-=0.6" // Inicia antes que termine el título principal
        );
    }

    // 4. Descripción
    heroTl.fromTo(heroDescription,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
    );

    // 5. Botón (si existe)
    // if (heroButton) {
    //     heroTl.fromTo(heroButton,
    //         { opacity: 0, scale: 0.9 },
    //         { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.1)" },
    //         "-=0.4"
    //     );
    // }

    // 6. Imagen de la derecha
    heroTl.fromTo(heroImage,
        { opacity: 0, x: 50, rotationZ: 5 },
        { opacity: 1, x: 0, rotationZ: 0, duration: 1, ease: "power3.out" },
        "-=0.7" // Inicia antes que termine la descripción
    );

// Goverment

const governmentSection = document.querySelector('.government-section');
if (!governmentSection) return;

const sectionTitleGov = governmentSection.querySelector('.section-title-gov');
const sectionDescriptionGov = governmentSection.querySelector('.section-description-gov');
const subsectionTitleAdvisor = governmentSection.querySelector('.subsection-title:first-of-type'); // "Consejo Asesor"
const advisorCards = governmentSection.querySelectorAll('.advisor-card');
const subsectionTitleGerencias = governmentSection.querySelector('.subsection-title:last-of-type'); // "Gerencias Generales"

const govTl = gsap.timeline({
    scrollTrigger: {
        trigger: governmentSection,
        start: "top center+=10%", // Comienza cuando la sección está un poco más arriba del centro del viewport
        // markers: true, // Descomentar para visualizar los triggers
        once: true // Solo se anima una vez
    }
});

// 1. Título "Gobierno" con ícono
govTl.fromTo(sectionTitleGov,
    { opacity: 0, y: 30, x: -20 },
    { opacity: 1, y: 0, x: 0, duration: 0.8, ease: "power2.out" }
);

// Si el icono es un elemento separado y quieres una animación extra para él
const iconHexagon = sectionTitleGov.querySelector('.icon-hexagon');
if (iconHexagon) {
    govTl.fromTo(iconHexagon,
        { opacity: 0, scale: 0.5, rotation: -90 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)" },
        "-=0.5" // Inicia un poco antes de que termine el título principal
    );
}


// 2. Descripción principal de la sección Gobierno
govTl.fromTo(sectionDescriptionGov,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
    "-=0.6" // Inicia un poco antes que termine el título
);

// 3. Subtítulo "Consejo Asesor"
govTl.fromTo(subsectionTitleAdvisor,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
    "-=0.4" // Inicia un poco antes que termine la descripción
);

// 4. Tarjetas de Asesores (cada una con un ligero stagger)
govTl.fromTo(advisorCards,
    { opacity: 0, y: 50, scale: 0.95 },
    {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.2)", // Efecto de rebote sutil
        stagger: 0.15 // Retraso entre la aparición de cada tarjeta
    },
    "-=0.5" // Inicia un poco antes que termine el subtítulo "Consejo Asesor"
);

// 5. Subtítulo "Gerencias Generales" (siempre que esté en esta misma sección)
// Es posible que este subtítulo esté demasiado abajo y necesite su propio scrollTrigger
// Si no es el caso, lo animamos aquí
if (subsectionTitleGerencias) {
    govTl.fromTo(subsectionTitleGerencias,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4" // Inicia un poco antes que las últimas tarjetas o al final de la secuencia principal
    );
}


// --- Microinteracciones para las tarjetas (opcional, fuera de la línea de tiempo de entrada) ---
// Animación al pasar el mouse por encima de cada tarjeta de asesor
advisorCards.forEach(card => {
    const link = card.querySelector('.linkedin-link');
    const photo = card.querySelector('.advisor-photo');

    // Animación de la tarjeta al hover
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.03, // Ligeramente más grande
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Sombra más pronunciada
            duration: 0.3,
            ease: "power2.out"
        });
        // Opcional: animar el enlace "Ver Más"
        if (link) {
            gsap.to(link, {
                color: "#2a62ff", // Color de acento
                duration: 0.2
            });
        }
        // Opcional: animar la foto
        if (photo) {
            gsap.to(photo, {
                scale: 1.05,
                duration: 0.3
            });
        }
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1, // Vuelve al tamaño normal
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Vuelve a la sombra original
            duration: 0.3,
            ease: "power2.out"
        });
        if (link) {
            gsap.to(link, {
                color: "#A7B3C6", // Color original
                duration: 0.2
            });
        }
        if (photo) {
            gsap.to(photo, {
                scale: 1,
                duration: 0.3
            });
        }
    });
});

});




