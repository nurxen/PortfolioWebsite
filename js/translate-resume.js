const translationsResume = {
    en: {
        meta_title: "Resumé - Nuria Serrano | 3D Technical Artist",
        meta_desc: "Resumé of Nuria Serrano, 3D Technical Artist and Environment Artist specialized in real-time simulation and game development.",
        nav_home: "Home",
        nav_work: "Work",
        nav_artwork: "3D & Technical Art",
        nav_games: "Games & Sims",
        nav_about: "About me",
        nav_resume: "Resumé",
        nav_contact: "Contact",

        resume_eyebrow: "✦ CURRICULUM VITAE",
        resume_role_title: "3D Technical Artist",
        resume_role_subtitle: "Real-Time Simulation & Game Development",
        resume_location: "Madrid, Spain  •  nuriaserrano04@gmail.com  •  +34 688 919 229",
        btn_download_cv: "Download CV",

        sec_summary: "Summary",
        summary_text: "Technical Artist specialized in simulation pipelines and game development. Expertise in modular architecture, real-time optimization, and Shader Graph. Experience ranging from clinical training simulators (Steam-published ECOE) to commercial games (UNCHAINED).",

        sec_skills: "Core Skills",
        tag_channel: "Channel Packing",
        tag_opt: "Pipeline Optimization",

        sec_exp: "Key Experience",
        exp1_title: "ECOE Medical Simulator (Steam)",
        exp1_role: "Lead Environment Artist & Pipeline Specialist",
        exp1_desc: "Modular architecture, optimization (ORM, Atlasing), custom shaders, and Baked GI setup for a clinical training simulator.",
        exp2_title: "UNCHAINED (Commercial Game)",
        exp2_role: "Tech & Environment Artist",
        exp2_desc: "Asset modeling, rigging, and Unity integration. Winner of Game Scholars Jam 4th Edition, released on Steam.",

        sec_edu: "Education",
        edu1_title: "B.S. in Game Development",
        edu1_role: "Universidad Rey Juan Carlos (2022 - 2026)",
        edu1_desc: "Specialized track in 3D Graphics & Real-Time Systems. Erasmus at Haaga-Helia (Helsinki).",

        sec_rec: "Recognition",
        rec_awards_label: "Awards:",
        rec_awards_val: "1st Place Game Scholars Jam, National Devuego Finalist, 3x Jam Podium.",
        rec_lang_label: "Languages:",
        rec_lang_val: "Spanish (Native), English (C1).",

        footer_tagline: "3D Environment & Technical Artist",
        footer_explore: "Explore",
        footer_artwork: "Artwork Gallery",
        footer_games: "Games & Sims",
        footer_touch: "Get in Touch",
        footer_contact_form: "Contact Form",
        footer_email: "Email Me",
        footer_note: "Available for freelance.",
        footer_rights: "All Rights Reserved.",
        footer_credit: "Made with technical precision & Blender"
    },
    es: {
        meta_title: "Currículum - Nuria Serrano | Artista Técnico 3D",
        meta_desc: "Currículum de Nuria Serrano, Artista Técnico 3D y Artista de Entornos especializada en simulación en tiempo real y desarrollo de videojuegos.",
        nav_home: "Inicio",
        nav_work: "Trabajos",
        nav_artwork: "Arte 3D y Técnico",
        nav_games: "Juegos y Simulación",
        nav_about: "Sobre mí",
        nav_resume: "Currículum",
        nav_contact: "Contacto",

        resume_eyebrow: "✦ CURRICULUM VITAE",
        resume_role_title: "Artista Técnico 3D",
        resume_role_subtitle: "Simulación en Tiempo Real y Desarrollo de Videojuegos",
        resume_location: "Madrid, España  •  nuriaserrano04@gmail.com  •  +34 688 919 229",
        btn_download_cv: "Descargar CV",

        sec_summary: "Resumen Profesional",
        summary_text: "Artista Técnico especializada en pipelines de simulación y desarrollo de videojuegos. Experiencia en arquitectura modular, optimización en tiempo real y Shader Graph. Experiencia que abarca desde simuladores de entrenamiento clínico (ECOE publicado en Steam) hasta juegos comerciales (UNCHAINED).",

        sec_skills: "Habilidades Principales",
        tag_channel: "Channel Packing",
        tag_opt: "Optimización de Pipeline",

        sec_exp: "Experiencia Destacada",
        exp1_title: "Simulador Médico ECOE (Steam)",
        exp1_role: "Lead Environment Artist & Pipeline Specialist",
        exp1_desc: "Arquitectura modular, optimización (ORM, Atlasing), shaders personalizados y configuración de Baked GI para simulador clínico.",
        exp2_title: "UNCHAINED (Juego Comercial)",
        exp2_role: "Tech & Environment Artist",
        exp2_desc: "Modelado de assets, rigging e integración en Unity. Ganador de la 4ª Edición de Game Scholars Jam, lanzado en Steam.",

        sec_edu: "Educación",
        edu1_title: "Grado en Desarrollo de Videojuegos",
        edu1_role: "Universidad Rey Juan Carlos (2022 - 2026)",
        edu1_desc: "Mención especializada en Gráficos 3D y Sistemas en Tiempo Real. Erasmus en Haaga-Helia (Helsinki).",

        sec_rec: "Reconocimientos",
        rec_awards_label: "Premios:",
        rec_awards_val: "1er Puesto Game Scholars Jam, Finalista Nacional Devuego, 3x Podio en Jams.",
        rec_lang_label: "Idiomas:",
        rec_lang_val: "Español (Nativo), Inglés (C1).",

        footer_tagline: "Artista de Entornos 3D y Technical Artist",
        footer_explore: "Explorar",
        footer_artwork: "Galería de Arte",
        footer_games: "Juegos y Simulaciones",
        footer_touch: "Ponte en Contacto",
        footer_contact_form: "Formulario de Contacto",
        footer_email: "Envíame un Email",
        footer_note: "Disponible para freelance.",
        footer_rights: "Todos los derechos reservados.",
        footer_credit: "Hecho con precisión técnica y Blender"
    }
};

function changeLanguageResume(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translationsResume[lang] && translationsResume[lang][key]) {
            element.textContent = translationsResume[lang][key];
        }
    });

    if (translationsResume[lang]["meta_title"]) {
        document.title = translationsResume[lang]["meta_title"];
    }

    localStorage.setItem("preferred_lang", lang);
    const btn = document.getElementById("lang-toggle");
    if (btn) {
        btn.textContent = lang === "es" ? "EN" : "ES";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("preferred_lang") || "en";
    if (savedLang === "es") {
        changeLanguageResume("es");
    }

    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const currentLang = localStorage.getItem("preferred_lang") || "en";
            const newLang = currentLang === "en" ? "es" : "en";
            changeLanguageResume(newLang);
        });
    }
});