const translationsContact = {
    en: {
        meta_title: "Contact - Nuria Serrano | 3D Environment & Technical Artist",
        meta_desc: "Get in touch with Nuria Serrano for game development, 3D art commissions, or freelance technical art opportunities.",
        nav_home: "Home",
        nav_work: "Work",
        nav_artwork: "3D & Technical Art",
        nav_games: "Games & Sims",
        nav_about: "About me",
        nav_resume: "Resumé",
        nav_contact: "Contact",

        status_available: "Available for work",
        hero_h1: "Let's create",
        hero_magic: "Magic",
        hero_together: "together",
        hero_desc: "Do you have a game idea, a 3D world to build, or just want to say hi? I'm always open to discussing new projects and creative collaborations.",

        panel_title: "Contact Info",
        panel_subtitle: "Let's keep in touch",
        info_email_label: "Email Me",
        info_loc_label: "Location",
        info_loc_val: "Spain, Europe",
        info_loc_sub: "Remote work available worldwide",
        info_status_label: "Current Status",
        info_status_val: "Open to Freelance",
        btn_see_cv: "See CV",

        form_name_label: "Your Name",
        form_name_placeholder: "Name",
        form_email_label: "Email Address",
        form_interest_label: "I'm interested in...",
        radio_gamedev: "Game Dev",
        radio_3dart: "3D Art",
        radio_freelance: "Freelance",
        radio_hi: "Just Hi!",
        form_msg_label: "Your Message",
        form_msg_placeholder: "Tell me a bit about your project...",
        btn_send: "Send Message",
        form_success: "✨ Message sent! I'll get back to you soon.",

        social_title: "Or find me online",
        social_sub: "I usually hang out here",
        card_portfolio: "Portfolio",
        card_updates: "Daily Updates",
        card_pro: "Professional",
        card_wip: "WIP & Art",

        footer_tagline: "3D Environment & Technical Artist",
        footer_explore: "Explore",
        footer_artwork: "Artwork Gallery",
        footer_games: "Videogames",
        footer_touch: "Get in Touch",
        footer_contact_form: "Contact Form",
        footer_email: "Email Me",
        footer_note: "Available for freelance.",
        footer_rights: "All Rights Reserved.",
        footer_credit: "Made with technical precision & Blender"
    },
    es: {
        meta_title: "Contacto - Nuria Serrano | Artista de Entornos 3D y Technical Artist",
        meta_desc: "Ponte en contacto con Nuria Serrano para desarrollo de videojuegos, encargos de arte 3D u oportunidades de arte técnico freelance.",
        nav_home: "Inicio",
        nav_work: "Trabajos",
        nav_artwork: "Arte 3D y Técnico",
        nav_games: "Juegos y Simulación",
        nav_about: "Sobre mí",
        nav_resume: "Currículum",
        nav_contact: "Contacto",

        status_available: "Disponible para trabajar",
        hero_h1: "Creemos",
        hero_magic: "Magia",
        hero_together: "juntos",
        hero_desc: "¿Tienes una idea de videojuego, un mundo 3D que construir o simplemente quieres saludar? Siempre estoy abierta a debatir nuevos proyectos y colaboraciones creativas.",

        panel_title: "Información de Contacto",
        panel_subtitle: "Mantengámonos en contacto",
        info_email_label: "Envíame un Email",
        info_loc_label: "Ubicación",
        info_loc_val: "España, Europa",
        info_loc_sub: "Trabajo remoto disponible a nivel mundial",
        info_status_label: "Estado Actual",
        info_status_val: "Disponible para Freelance",
        btn_see_cv: "Ver CV",

        form_name_label: "Tu Nombre",
        form_name_placeholder: "Nombre",
        form_email_label: "Correo Electrónico",
        form_interest_label: "Estoy interesado/a en...",
        radio_gamedev: "Desarrollo",
        radio_3dart: "Arte 3D",
        radio_freelance: "Freelance",
        radio_hi: "¡Solo saludar!",
        form_msg_label: "Tu Mensaje",
        form_msg_placeholder: "Cuéntame un poco sobre tu proyecto...",
        btn_send: "Enviar Mensaje",
        form_success: "✨ ¡Mensaje enviado! Te responderé pronto.",

        social_title: "O encuéntrame online",
        social_sub: "Suelo estar por aquí",
        card_portfolio: "Portfolio",
        card_updates: "Actualizaciones",
        card_pro: "Profesional",
        card_wip: "WIP y Arte",

        footer_tagline: "Artista de Entornos 3D y Technical Artist",
        footer_explore: "Explorar",
        footer_artwork: "Galería de Arte",
        footer_games: "Videojuegos",
        footer_touch: "Ponte en Contacto",
        footer_contact_form: "Formulario de Contacto",
        footer_email: "Envíame un Email",
        footer_note: "Disponible para freelance.",
        footer_rights: "Todos los derechos reservados.",
        footer_credit: "Hecho con precisión técnica y Blender"
    }
};

function changeLanguageContact(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translationsContact[lang] && translationsContact[lang][key]) {
            element.textContent = translationsContact[lang][key];
        }
    });

    // Traducir placeholders de inputs o textareas
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translationsContact[lang] && translationsContact[lang][key]) {
            element.setAttribute("placeholder", translationsContact[lang][key]);
        }
    });

    if (translationsContact[lang]["meta_title"]) {
        document.title = translationsContact[lang]["meta_title"];
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
        changeLanguageContact("es");
    }

    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const currentLang = localStorage.getItem("preferred_lang") || "en";
            const newLang = currentLang === "en" ? "es" : "en";
            changeLanguageContact(newLang);
        });
    }
});