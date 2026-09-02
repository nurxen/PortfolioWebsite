/* =========================
   main.js
========================= */

gsap.registerPlugin(ScrollTrigger);

// =========================
// 1. REVEAL ANIMATIONS
// =========================
<<<<<<< Updated upstream

document.addEventListener('DOMContentLoaded', () => {

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

    

});
=======
document.querySelectorAll(".reveal-section").forEach((el) => {
    gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
        },
    });
});

// =========================
// 2. TABS
// =========================
function switchTab(tabId, btn) {
    const container = btn.closest("section");
    if (!container) return;

    // Desactivar todos los paneles
    container.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.remove("active");
        // MEJORA: accesibilidad — ocultar de lectores de pantalla cuando inactivo
        tab.setAttribute("hidden", "");
    });

    // Resetear todos los botones
    container.querySelectorAll(".tab-btn").forEach((b) => {
        b.classList.remove("bg-nb-blue", "text-white", "active");
        b.classList.add("text-nb-blue/40");
        // MEJORA: accesibilidad
        b.setAttribute("aria-selected", "false");
    });

    // Activar el panel seleccionado
    const activePanel = document.getElementById(tabId);
    if (!activePanel) return;
    activePanel.classList.add("active");
    activePanel.removeAttribute("hidden");

    // Activar el botón seleccionado
    btn.classList.add("bg-nb-blue", "text-white", "active");
    btn.classList.remove("text-nb-blue/40");
    btn.setAttribute("aria-selected", "true");

    ScrollTrigger.refresh();
}

// =========================
// 3. GALLERY FILTER
// =========================
function filterGallery(category, btn) {
    // Actualizar estado de botones
    document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item) => {
        const isVisible = category === "all" || item.classList.contains(category);

        if (isVisible) {
            item.style.display = "block";
            // CORRECCIÓN: reset inmediato antes de la transición para que el efecto se vea siempre
            item.style.transition = "none";
            item.style.opacity = "0";
            item.style.transform = "scale(0.95)";

            // Forzar reflow para que el reset se aplique antes de la animación
            void item.offsetHeight;

            item.style.transition = "opacity 0.4s ease, transform 0.4s ease";
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
        } else {
            item.style.transition = "none";
            item.style.display = "none";
        }
    });

    setTimeout(() => ScrollTrigger.refresh(), 450);
}

// =========================
// 4. COMPARISON SLIDER
// =========================
function initSlider(idContainer, idOverlay, idHandle) {
    const container = document.getElementById(idContainer);
    const overlay   = document.getElementById(idOverlay);
    const handle    = document.getElementById(idHandle);

    if (!container || !overlay || !handle) return;

    const overlayImg = overlay.querySelector("img");

    // Sincroniza el ancho de la imagen del overlay con el contenedor
    const syncImageWidth = () => {
        if (overlayImg) {
            overlayImg.style.width = `${container.clientWidth}px`;
        }
    };

    syncImageWidth();
    // CORRECCIÓN: usar ResizeObserver en lugar de window resize para mayor precisión
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

    // Mouse
    container.addEventListener("mousedown", (e) => {
        isDragging = true;
        update(e.clientX);
        // MEJORA: cursor durante el drag
        document.body.style.cursor = "ew-resize";
    });
    window.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.cursor = "";
    });
    window.addEventListener("mousemove", (e) => {
        if (isDragging) update(e.clientX);
    });

    // Touch
    container.addEventListener("touchstart", (e) => {
        isDragging = true;
        update(e.touches[0].clientX);
        // CORRECCIÓN: evitar scroll de página mientras se arrastra el slider
        e.preventDefault();
    }, { passive: false });
    window.addEventListener("touchend", () => { isDragging = false; });
    window.addEventListener("touchmove", (e) => {
        if (isDragging) {
            update(e.touches[0].clientX);
            // CORRECCIÓN: evitar scroll de página mientras se arrastra
            e.preventDefault();
        }
    }, { passive: false });

    // MEJORA: soporte de teclado para accesibilidad
    container.setAttribute("tabindex", "0");
    container.addEventListener("keydown", (e) => {
        const step = 5; // 5% por pulsación
        const current = parseFloat(overlay.style.width) || 50;
        if (e.key === "ArrowLeft")  update(container.getBoundingClientRect().left + ((current - step) / 100) * container.clientWidth);
        if (e.key === "ArrowRight") update(container.getBoundingClientRect().left + ((current + step) / 100) * container.clientWidth);
    });
}

// =========================
// 5. SIDE NAV HIGHLIGHT + BACK TO TOP
// =========================
const backToTopBtn = document.getElementById("backToTop");

// CORRECCIÓN: usar requestAnimationFrame para no bloquear el hilo principal en el scroll
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

function handleScroll() {
    // Side nav highlight
    const sections  = ["featured", "props-section", "shaders", "gallery", "motion-section", "awards", "games-preview", "skills", "page-about"];
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((id) => {
        const el   = document.getElementById(id);
        const link = document.querySelector(`#side-nav a[href="#${id}"]`);
        if (!el || !link) return;

        const inView = scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight;
        link.classList.toggle("nav-link-active", inView);
    });

    // Back to top
    if (!backToTopBtn) return;
    if (window.scrollY > 800) {
        backToTopBtn.classList.remove("opacity-0", "invisible", "translate-y-10");
        backToTopBtn.classList.add("opacity-100", "visible");
    } else {
        backToTopBtn.classList.add("opacity-0", "invisible", "translate-y-10");
        backToTopBtn.classList.remove("opacity-100", "visible");
    }
}

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// =========================
// 6. INIT ON LOAD
// =========================
window.addEventListener("load", () => {
    // Slider circular del hero (index.html)
    initSlider("compare-slider", "compare-overlay", "compare-handle");

    // Slider rectangular de shaders (artwork.html)
    initSlider("shader-slider", "shader-overlay", "shader-handle");
});

window.addEventListener('scroll', () => {
            const sideNav = document.getElementById('side-nav');
            const gamesSection = document.getElementById('games-preview');

            if (!sideNav || !gamesSection) return;

            const rect = gamesSection.getBoundingClientRect();

            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                sideNav.classList.remove('side-nav--dark');
                sideNav.classList.add('side-nav--light');
            } else {
                sideNav.classList.remove('side-nav--light');
                sideNav.classList.add('side-nav--dark');
            }
        });
>>>>>>> Stashed changes
