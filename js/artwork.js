gsap.registerPlugin(ScrollTrigger);

// 1. Animaciones de revelado
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

// 2. Tabs
function switchTab(tabId, btn) {
    const container = btn.closest('section');

    container.querySelectorAll(".tab-content")
        .forEach(tab => tab.classList.remove("active"));

    container.querySelectorAll(".tab-btn")
        .forEach(b => {
            b.classList.remove("bg-nb-blue", "text-white", "active");
            b.classList.add("text-nb-blue/40");
        });

    document.getElementById(tabId).classList.add("active");
    btn.classList.add("bg-nb-blue", "text-white", "active");
    btn.classList.remove("text-nb-blue/40");

    ScrollTrigger.refresh();
}

// 3. Filtro galería
function filterGallery(category, btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
            item.style.opacity = "0";
            item.style.transform = "scale(0.9)";
            setTimeout(() => {
                item.style.transition = "all 0.4s ease";
                item.style.opacity = "1";
                item.style.transform = "scale(1)";
            }, 50);
        } else {
            item.style.display = "none";
        }
    });
    setTimeout(() => ScrollTrigger.refresh(), 300);
}

// 4. Lógica del Slider (¡ESTO ES LO QUE FALTABA!)
function initSlider(idContainer, idOverlay, idHandle) {
    const container = document.getElementById(idContainer);
    const overlay = document.getElementById(idOverlay);
    const handle = document.getElementById(idHandle);
    
    if (!container || !overlay || !handle) return;

    // --- CORRECCIÓN PIXEL-PERFECT ---
    const overlayImg = overlay.querySelector('img');

    const syncImageWidth = () => {
        if (overlayImg) {
            // CAMBIO IMPORTANTE: Usamos clientWidth en vez de offsetWidth
            // clientWidth = Ancho real disponible para la imagen (sin bordes)
            overlayImg.style.width = `${container.clientWidth}px`;
        }
    };

    syncImageWidth();
    window.addEventListener('resize', syncImageWidth);
    setTimeout(syncImageWidth, 100); 
    // ---------------------------------

    let isDragging = false;

    const update = (x) => {
        const rect = container.getBoundingClientRect();
        // Ajuste fino para coordenadas relativas al viewport
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
// 5. Scroll logic (side nav + back to top)
window.addEventListener("scroll", () => {
    const sections = ["featured", "props-section", "shaders", "gallery"];
    const scrollPos = window.scrollY + 300;

    sections.forEach(id => {
        const el = document.getElementById(id);
        const link = document.querySelector(`#side-nav a[href="#${id}"]`);

        if (!el || !link) return;

        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            link.classList.add("nav-link-active");
        } else {
            link.classList.remove("nav-link-active");
        }
    });

    const btt = document.getElementById("backToTop");
    if (btt) { // Comprobación de seguridad
        if (window.scrollY > 800) {
            btt.classList.remove("opacity-0", "invisible");
            btt.classList.add("opacity-100", "visible");
        } else {
            btt.classList.add("opacity-0", "invisible");
        }
    }
});

const bttBtn = document.getElementById("backToTop");
if(bttBtn) {
    bttBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

// 6. Inicialización al cargar la página
window.addEventListener('load', () => {
    // Tu slider original del Hero (Redondo)
    initSlider('compare-slider', 'compare-overlay', 'compare-handle');
    
    // Tu NUEVO slider rectangular (Shaders)
    initSlider('shader-slider', 'shader-overlay', 'shader-handle');
});