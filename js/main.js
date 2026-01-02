// =========================
// MAIN JS
// =========================

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
