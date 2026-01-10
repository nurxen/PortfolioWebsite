gsap.registerPlugin(ScrollTrigger);

// Animaciones de revelado
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

// Tabs
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

// Filtro galería
function filterGallery(category, btn) {
    document.querySelectorAll(".filter-btn")
        .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    document.querySelectorAll(".gallery-item").forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
            setTimeout(() => item.style.opacity = "1", 10);
        } else {
            item.style.opacity = "0";
            setTimeout(() => item.style.display = "none", 500);
        }
    });

    setTimeout(() => ScrollTrigger.refresh(), 600);
}

// Scroll logic (side nav + back to top)
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
    if (window.scrollY > 800) {
        btt.classList.remove("opacity-0", "invisible");
        btt.classList.add("opacity-100", "visible");
    } else {
        btt.classList.add("opacity-0", "invisible");
    }
});

document.getElementById("backToTop").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
