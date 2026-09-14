/* ==========================================================
   MAIN JS (Unificado y Optimizado)
   ========================================================== */

gsap.registerPlugin(ScrollTrigger);

// =========================
// 1. REVEAL ANIMATIONS
// =========================
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
// 2. TABS (Assets / Workflow Switcher)
// =========================
function switchTab(tabId, btn) {
    const container = btn.closest("section");
    if (!container) return;

    // Desactivar todos los paneles de pestañas dentro de la sección
    container.querySelectorAll(".artwork-tab-content, .tab-content").forEach((tab) => {
        tab.classList.remove("active");
        tab.style.display = "none";
        tab.setAttribute("hidden", "");
    });

    // Resetear todos los botones de pestañas
    container.querySelectorAll(".artwork-tab-btn, .tab-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
    });

    // Activar el panel seleccionado
    const activePanel = document.getElementById(tabId);
    if (!activePanel) return;
    activePanel.classList.add("active");
    activePanel.style.display = "grid";
    activePanel.removeAttribute("hidden");

    // Activar el botón seleccionado
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    ScrollTrigger.refresh();
}

// =========================
// GALLERY FILTER (Corregido)
// =========================
function filterGallery(category, btn) {
    // 1. Quitar la clase active y el aria-pressed de TODOS los botones de filtro
    const filterContainer = btn.closest(".artwork-filter-buttons") || document;
    filterContainer.querySelectorAll(".artwork-filter-btn, .filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
    });

    // 2. Activar únicamente el botón pulsado
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    // 3. Filtrar los elementos de la galería con animación suave
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item) => {
        const isVisible = category === "all" || item.classList.contains(category);

        if (isVisible) {
            item.style.display = "block";
            item.style.transition = "none";
            item.style.opacity = "0";
            item.style.transform = "scale(0.95)";

            void item.offsetHeight; // Forzar reflow

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
// 4. COMPARISON SLIDER (Shaders / Renders)
// =========================
function initSlider(idContainer, idOverlay, idHandle) {
    const container = document.getElementById(idContainer);
    const overlay   = document.getElementById(idOverlay);
    const handle    = document.getElementById(idHandle);

    if (!container || !overlay || !handle) return;

    const overlayImg = overlay.querySelector("img");
    const baseImg = container.querySelector(":scope > img");

    const syncImageWidth = () => {
        const containerWidth = container.clientWidth;
        if (overlayImg) overlayImg.style.width = `${containerWidth}px`;
        if (baseImg) baseImg.style.width = `${containerWidth}px`;
    };

    syncImageWidth();
    
    if (window.ResizeObserver) {
        new ResizeObserver(syncImageWidth).observe(container);
    } else {
        window.addEventListener("resize", syncImageWidth);
    }

    let isDragging = false;

    const updatePosition = (clientX) => {
        const rect = container.getBoundingClientRect();
        let offsetX = clientX - rect.left;
        let percentage = (offsetX / rect.width) * 100;
        
        percentage = Math.max(0, Math.min(percentage, 100));

        overlay.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
    };

    // Eventos de Ratón
    container.addEventListener("mousedown", (e) => {
        isDragging = true;
        updatePosition(e.clientX);
        document.body.style.cursor = "ew-resize";
        e.preventDefault();
    });

    window.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            document.body.style.cursor = "";
        }
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        updatePosition(e.clientX);
    });

    // Eventos Táctiles (Móviles / Tablets)
    container.addEventListener("touchstart", (e) => {
        isDragging = true;
        updatePosition(e.touches[0].clientX);
        e.preventDefault();
    }, { passive: false });

    window.addEventListener("touchend", () => {
        isDragging = false;
    });

    window.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        updatePosition(e.touches[0].clientX);
        e.preventDefault();
    }, { passive: false });

    // Accesibilidad por Teclado
    container.setAttribute("tabindex", "0");
    container.addEventListener("keydown", (e) => {
        const step = 5;
        let currentWidth = parseFloat(overlay.style.width) || 50;
        if (e.key === "ArrowLeft") {
            currentWidth = Math.max(0, currentWidth - step);
            overlay.style.width = `${currentWidth}%`;
            handle.style.left = `${currentWidth}%`;
        }
        if (e.key === "ArrowRight") {
            currentWidth = Math.min(100, currentWidth + step);
            overlay.style.width = `${currentWidth}%`;
            handle.style.left = `${currentWidth}%`;
        }
    });
}

// =========================
// 5. SIDE NAV HIGHLIGHT + BACK TO TOP
// =========================
const backToTopBtn = document.getElementById("backToTop");
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
    // Sincronizar enlaces laterales activos
    const sections = ["featured", "props-section", "shaders", "motion-section", "materials-library", "gallery"];
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((id) => {
        const el = document.getElementById(id);
        const link = document.querySelector(`#side-nav a[href="#${id}"]`);
        if (!el || !link) return;

        const inView = scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight;
        link.classList.toggle("nav-link-active", inView);
    });

    // Visibilidad del botón Back to Top
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
// 6. INITIALIZATION ON LOAD
// =========================
window.addEventListener("load", () => {
    // Inicializar sliders de comparación si existen en la vista actual
    initSlider("compare-slider", "compare-overlay", "compare-handle");
    initSlider("shader-slider", "shader-overlay", "shader-handle");
});

