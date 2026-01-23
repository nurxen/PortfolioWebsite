// =========================
// MAIN JS
// =========================

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. HERO PARALLAX ---
    // Seleccionamos la imagen de fondo del hero
    const heroImage = document.querySelector('#page-about section:first-of-type img');
    
    if (heroImage) {
        gsap.to(heroImage, {
            yPercent: 20, // La imagen bajará un 20% de su altura mientras scrolleas
            ease: "none",
            scrollTrigger: {
                trigger: "#page-about section:first-of-type",
                start: "top top",
                end: "bottom top",
                scrub: true // Vincula la animación al movimiento de la barra de scroll
            }
        });
    }
    // --- NAVIGATION ---
    function showPage(pageId) {
        document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
        const target = document.getElementById('page-' + pageId);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        reveal();
    }

    function scrollToSection(sectionId) {
        const aboutPage = document.getElementById('page-about');
        if (!aboutPage.classList.contains('active')) {
            showPage('about');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        } else {
            const section = document.getElementById(sectionId);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // --- GSAP REVEAL ---
    gsap.registerPlugin(ScrollTrigger);
    function reveal() {
        document.querySelectorAll(".reveal-section").forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                }
            );
        });
    }
    reveal();

    // --- SLIDER LOGIC ---
    function initSlider(idContainer, idOverlay, idHandle) {
        const container = document.getElementById(idContainer);
        const overlay = document.getElementById(idOverlay);
        const handle = document.getElementById(idHandle);
        if (!container) return;

        let isDragging = false;

        const update = (x) => {
            const rect = container.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;
            position = Math.max(0, Math.min(position, 100));
            overlay.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        };

        container.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('mousemove', (e) => { if (isDragging) update(e.clientX); });

        container.addEventListener('touchstart', () => isDragging = true);
        window.addEventListener('touchend', () => isDragging = false);
        window.addEventListener('touchmove', (e) => { if (isDragging) update(e.touches[0].clientX); });

        container.addEventListener('click', (e) => update(e.clientX));
    }

    window.addEventListener('load', () => {
        initSlider('compare-slider', 'compare-overlay', 'compare-handle');
    });

    // --- 4. TIMELINE DRAWING ---
    const timelineLine = document.querySelector('.absolute.left-1\\/2.top-0.w-px.h-full'); // Selector específico para tu línea
    
    if (timelineLine) {
        gsap.fromTo(timelineLine, 
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: "#awards",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1 // Dibuja suavemente al hacer scroll
                }
            }
        );
    }

    

    // --- BACK TO TOP BUTTON ---
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-10');
                backToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-10');
                backToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    gsap.registerPlugin(ScrollTrigger);

        // Reveal Animations
        document.querySelectorAll(".reveal-section").forEach((el) => {
            gsap.fromTo(el, 
                { y: 30, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power2.out", 
                    scrollTrigger: { trigger: el, start: "top 90%" } 
                }
            );
        });

        // Parallax suave para elementos flotantes
        gsap.to(".animate-float", {
            y: -20,
            rotation: 5,
            scrollTrigger: {
                trigger: "#hero-contact",
                start: "top top",
                end: "bottom top",
                scrub: 2
            }
        });

        const form = document.getElementById("contact-form");
    const btn = document.getElementById("submit-btn");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Evita la recarga de página
        
        const data = new FormData(event.target);
        const btnText = btn.querySelector("span");
        const originalText = btnText.innerText;

        // 1. Estado de carga
        btn.disabled = true;
        btnText.innerText = "Sending Magic...";
        
        try {
            // 2. Enviar a Formspree
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // 3. Respuesta exitosa
            if (response.ok) {
                status.innerText = "✨ Message sent successfully! I'll be in touch.";
                status.classList.remove("hidden", "text-red-500");
                status.classList.add("text-nb-blue");
                form.reset(); // Limpia el formulario
                
                // Efecto visual extra: Confeti o cambio de color (opcional)
                btn.classList.add("bg-green-500");
                setTimeout(() => {
                     btn.classList.remove("bg-green-500");
                     btnText.innerText = originalText;
                     btn.disabled = false;
                     // Ocultar mensaje tras 5 segundos
                     setTimeout(() => status.classList.add("hidden"), 5000);
                }, 3000);

            } else {
                // 4. Error del servidor
                throw new Error("Server error");
            }
        } catch (error) {
            // 5. Error de conexión
            status.innerText = "Oops! There was a problem sending your message.";
            status.classList.remove("hidden", "text-nb-blue");
            status.classList.add("text-red-500");
            btn.disabled = false;
            btnText.innerText = originalText;
        }
    });

});

