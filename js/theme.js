/* =========================
   theme.js
   Page-specific logic for index.html (about page, contact form)
========================= */

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 1. GSAP SETUP
    // CORRECCIÓN: registrar el plugin una sola vez, al inicio
    // =========================
    gsap.registerPlugin(ScrollTrigger);

    // =========================
    // 2. REVEAL ANIMATIONS
    // CORRECCIÓN: una sola definición unificada (el original tenía dos bloques duplicados
    // con duraciones distintas: 0.8s y 1s). Se unifica en 0.9s con delay escalonado.
    // =========================
    function reveal() {
        document.querySelectorAll(".reveal-section").forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
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

    // =========================
    // 3. HERO PARALLAX
    // =========================
    const heroImage = document.querySelector("#page-about section:first-of-type img");

    if (heroImage) {
        gsap.to(heroImage, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: "#page-about section:first-of-type",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }
<<<<<<< Updated upstream
    elements.forEach(el => el.style.color = color);
}
=======

    // =========================
    // 4. FLOATING ELEMENTS PARALLAX (contact hero)
    // CORRECCIÓN: envuelto en condicional para que no rompa si el
    // elemento no existe en la página actual
    // =========================
    if (document.getElementById("hero-contact")) {
        gsap.to(".animate-float", {
            y: -20,
            rotation: 5,
            scrollTrigger: {
                trigger: "#hero-contact",
                start: "top top",
                end: "bottom top",
                scrub: 2,
            },
        });
    }

    // =========================
    // 5. TIMELINE DRAWING
    // =========================
    // CORRECCIÓN: el selector original usaba un escape de Tailwind frágil.
    // Se busca por un selector más legible y robusto mediante atributo o clase.
    const timelineLine = document.querySelector("#awards .timeline-line");

    if (timelineLine) {
        gsap.fromTo(
            timelineLine,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: "#awards",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            }
        );
    }

    // =========================
    // 6. PAGE NAVIGATION (multi-page view dentro de index.html)
    // =========================
    function showPage(pageId) {
        document.querySelectorAll(".page-view").forEach((p) => {
            p.classList.remove("active");
        });
        const target = document.getElementById("page-" + pageId);
        if (target) {
            target.classList.add("active");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        reveal();
        ScrollTrigger.refresh();
    }

    function scrollToSection(sectionId) {
        const aboutPage = document.getElementById("page-about");
        if (!aboutPage || !aboutPage.classList.contains("active")) {
            showPage("about");
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) section.scrollIntoView({ behavior: "smooth" });
            }, 500);
        } else {
            const section = document.getElementById(sectionId);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Exponer al scope global para poder llamarlas desde atributos onclick en el HTML
    window.showPage = showPage;
    window.scrollToSection = scrollToSection;

    // =========================
    // 7. COMPARISON SLIDER (index.html hero)
    // CORRECCIÓN: mismas mejoras que en main.js —
    // ResizeObserver, preventDefault en touch, soporte teclado
    // =========================
    function initSlider(idContainer, idOverlay, idHandle) {
        const container = document.getElementById(idContainer);
        const overlay   = document.getElementById(idOverlay);
        const handle    = document.getElementById(idHandle);
        if (!container || !overlay || !handle) return;

        const overlayImg = overlay.querySelector("img");

        const syncImageWidth = () => {
            if (overlayImg) {
                overlayImg.style.width = `${container.clientWidth}px`;
            }
        };

        syncImageWidth();
        if (window.ResizeObserver) {
            new ResizeObserver(syncImageWidth).observe(container);
        } else {
            window.addEventListener("resize", syncImageWidth);
        }

        let isDragging = false;

        const update = (clientX) => {
            const rect = container.getBoundingClientRect();
            let position = ((clientX - rect.left) / rect.width) * 100;
            position = Math.max(0, Math.min(position, 100));
            overlay.style.width = `${position}%`;
            handle.style.left   = `${position}%`;
        };

        container.addEventListener("mousedown", (e) => {
            isDragging = true;
            update(e.clientX);
            document.body.style.cursor = "ew-resize";
        });
        window.addEventListener("mouseup", () => {
            isDragging = false;
            document.body.style.cursor = "";
        });
        window.addEventListener("mousemove", (e) => {
            if (isDragging) update(e.clientX);
        });

        container.addEventListener("touchstart", (e) => {
            isDragging = true;
            update(e.touches[0].clientX);
            e.preventDefault();
        }, { passive: false });
        window.addEventListener("touchend", () => { isDragging = false; });
        window.addEventListener("touchmove", (e) => {
            if (isDragging) {
                update(e.touches[0].clientX);
                e.preventDefault();
            }
        }, { passive: false });

        // Soporte teclado
        container.setAttribute("tabindex", "0");
        container.addEventListener("keydown", (e) => {
            const step    = 5;
            const current = parseFloat(overlay.style.width) || 50;
            const rect    = container.getBoundingClientRect();
            if (e.key === "ArrowLeft")  update(rect.left + ((current - step) / 100) * container.clientWidth);
            if (e.key === "ArrowRight") update(rect.left + ((current + step) / 100) * container.clientWidth);
        });
    }

    window.addEventListener("load", () => {
        initSlider("compare-slider", "compare-overlay", "compare-handle");
    });

    // =========================
    // 8. BACK TO TOP
    // CORRECCIÓN: movido aquí desde el bloque duplicado; usa rAF para no
    // saturar el hilo principal (igual que en main.js)
    // =========================
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        let ticking = false;

        window.addEventListener("scroll", () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 500) {
                        backToTopBtn.classList.remove("opacity-0", "invisible", "translate-y-10");
                        backToTopBtn.classList.add("opacity-100", "visible", "translate-y-0");
                    } else {
                        backToTopBtn.classList.add("opacity-0", "invisible", "translate-y-10");
                        backToTopBtn.classList.remove("opacity-100", "visible", "translate-y-0");
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // =========================
    // 9. CONTACT FORM (contact.html)
    // CORRECCIÓN: envuelto en condicional para que no rompa en páginas sin formulario
    // =========================
    const form   = document.getElementById("contact-form");
    const btn    = document.getElementById("submit-btn");
    const status = document.getElementById("form-status");

    if (form && btn && status) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const data        = new FormData(event.target);
            const btnText     = btn.querySelector("span");
            const originalText = btnText ? btnText.innerText : "Send Message";

            // Estado de carga
            btn.disabled = true;
            if (btnText) btnText.innerText = "Sending...";

            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: { Accept: "application/json" },
                });

                if (response.ok) {
                    // Éxito
                    status.innerText = "✨ Message sent! I'll get back to you soon.";
                    status.classList.remove("hidden", "text-red-500");
                    status.classList.add("text-nb-blue");
                    // MEJORA: aria-live ya está en el HTML, pero nos aseguramos de que sea visible
                    status.removeAttribute("hidden");
                    form.reset();

                    // Feedback visual en el botón
                    btn.classList.add("bg-green-500");

                    setTimeout(() => {
                        btn.classList.remove("bg-green-500");
                        if (btnText) btnText.innerText = originalText;
                        btn.disabled = false;
                    }, 3000);

                    // Ocultar mensaje de éxito tras 6 segundos
                    setTimeout(() => {
                        status.classList.add("hidden");
                    }, 6000);

                } else {
                    // MEJORA: leer el mensaje de error de Formspree si lo devuelve
                    const errorData = await response.json().catch(() => null);
                    throw new Error(errorData?.error || "Server error");
                }

            } catch (error) {
                status.innerText = "Oops! Something went wrong. Please try again or email me directly.";
                status.classList.remove("hidden", "text-nb-blue");
                status.classList.add("text-red-500");
                status.removeAttribute("hidden");
                btn.disabled = false;
                if (btnText) btnText.innerText = originalText;
            }
        });
    }

}); // end DOMContentLoaded
>>>>>>> Stashed changes
