gsap.registerPlugin(ScrollTrigger);

        /* REVEAL ANIMATIONS */
        document.querySelectorAll(".reveal-section").forEach((el) => {
            gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 90%" },
            });
        });

        /* TABS LOGIC */
        function switchTab(tabId, btn) {
            document
                .querySelectorAll(".tab-content")
                .forEach((tab) => tab.classList.remove("active"));
            document.querySelectorAll(".tab-btn").forEach((b) => {
                b.classList.remove("bg-nb-blue", "text-white", "active");
                b.classList.add("text-nb-blue/50");
            });

            document.getElementById(tabId).classList.add("active");
            btn.classList.add("bg-nb-blue", "text-white", "active");
            btn.classList.remove("text-nb-blue/50");
            ScrollTrigger.refresh();
        }

        /* SHADER TOGGLE */
        function toggleShader(showNodes) {
            const container = document.getElementById("shader-visual-container");
            const btnFinal = document.getElementById("btn-shader-final");
            const btnGraph = document.getElementById("btn-shader-graph");

            if (showNodes) {
                container.classList.add("show-nodes");
                btnGraph.className =
                    "px-8 py-4 rounded-2xl bg-white text-nb-blue text-[10px] font-black tracking-widest uppercase transition-all shadow-xl";
                btnFinal.className =
                    "px-8 py-4 rounded-2xl bg-nb-blue border border-white/20 text-white text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-all";
            } else {
                container.classList.remove("show-nodes");
                btnFinal.className =
                    "px-8 py-4 rounded-2xl bg-white text-nb-blue text-[10px] font-black tracking-widest uppercase transition-all shadow-xl";
                btnGraph.className =
                    "px-8 py-4 rounded-2xl bg-nb-blue border border-white/20 text-white text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-all";
            }
        }

        /* GALLERY FILTER */
        function filterGallery(category, btn) {
            document
                .querySelectorAll(".filter-btn")
                .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const items = document.querySelectorAll(".gallery-item");
            items.forEach((item) => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                    setTimeout(() => (item.style.opacity = "1"), 10);
                } else {
                    item.style.opacity = "0";
                    setTimeout(() => (item.style.display = "none"), 500);
                }
            });
            setTimeout(() => ScrollTrigger.refresh(), 600);
        }

        /* SIDE NAV ACTIVE STATE & BACK TO TOP */
        window.addEventListener("scroll", () => {
            const sections = [
                "featured",
                "props-section",
                "shaders",
                "motion-section",
                "gallery",
            ];
            const scrollPos = window.scrollY + 400;

            sections.forEach((id) => {
                const el = document.getElementById(id);
                const link = document.querySelector(`#side-nav a[href="#${id}"]`);
                if (el && link) {
                    if (
                        scrollPos >= el.offsetTop &&
                        scrollPos < el.offsetTop + el.offsetHeight
                    ) {
                        link.classList.add("nav-link-active");
                    } else {
                        link.classList.remove("nav-link-active");
                    }
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

        document.getElementById("backToTop").onclick = () =>
            window.scrollTo({ top: 0, behavior: "smooth" });