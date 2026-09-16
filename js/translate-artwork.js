/* ==========================================================
   ARTWORK PAGE - TRANSLATION SYSTEM (EN/ES)
   ========================================================== */

const artworkTranslations = {
    es: {
        // Meta
        "meta_title": "Galería de Artwork - Nuria Serrano | Artista 3D & Technical Artist",

        // Hero Section
        "hero_eyebrow": "✦ PORTAFOLIO DE TECHNICAL ART",
        "hero_title_1": "Optimización de",
        "hero_title_2": "Entornos 3D",
        "hero_subtitle": "Renderizado en tiempo real, optimización de pipeline técnica y desarrollo de shaders para experiencias interactivas profesionales.",

        // Navigation
        "nav_home": "Inicio",
        "nav_work": "Trabajo",
        "nav_artwork": "Arte 3D & Technical",
        "nav_games": "Juegos & Simuladores",
        "nav_about": "Sobre mí",
        "nav_resume": "Currículum",
        "nav_contact": "Contacto",

        // Side Navigation
        "side_featured": "Destacado",
        "side_technical": "Técnico",
        "side_materials": "Materiales",
        "side_lighting": "Iluminación",
        "side_gallery": "Galería",

        // Featured Section
        "feat_tag": "Proyecto de Pipeline Completo",
        "feat_title": "Simulador ECOE 3D",
        "feat_desc": "Dirección técnica completa para una plataforma de simulación clínica. 5+ meses desarrollando assets modulares PBR, implementando soluciones de shader graph, optimizando el pipeline de renderizado y componiendo efectos de post-procesamiento para rendimiento en tiempo real.",
        "render_view": "Vista de Render",
        "tech_breakdown": "Desglose Técnico",
        "spec_triangles": "Triángulos",
        "spec_drawcalls": "Draw Calls",
        "spec_textures": "Texturas Atlasadas",
        "spec_lighting": "Iluminación",
        "spec_lighting_val": "Híbrida",

        // Stats
        "stat_mat_variants": "Variantes de Material",
        "stat_tex_maps": "Mapas de Textura",
        "stat_pipeline": "Pipeline",
        "stat_target_perf": "Rendimiento Objetivo",

        // Subcards
        "sub1_title": "Topología & Wireframe",
        "sub1_desc": "Topología limpia basada en quads. Flujo de aristas optimizado para deformación, soportando ensamblaje modular en escenas.",
        "sub2_title": "UVs Eficientes & Atlasing",
        "sub2_desc": "Mapas RGBA compactados en canales. Densidad de texel consistente (512px/m). Múltiples materiales compartiendo un atlas.",
        "sub3_title": "Enfoque de Iluminación Híbrida",
        "sub3_desc": "GI Baked + Light Probes + Luces en tiempo real. Passes de composición para mood y oclusión ambiental.",

        // Optimization Section
        "opt_tag": "Métricas de Rendimiento & Pipeline",
        "opt_title": "Optimización Técnica",
        "opt_desc": "Simulador ECOE: De 2,000 draw calls a 200. Datos de perfilado en tiempo real de Unity Profiler.",
        "opt_before": "Antes de Optimización (Importación Raw)",
        "opt_after": "Después de Optimización (Mejores Prácticas)",
        "perf_comp_title": "Comparativa de Rendimiento",
        "table_setpass": "Llamadas SetPass",
        "table_drawcalls": "Draw Calls",
        "table_triangles": "Triángulos",
        "table_framerate": "Velocidad de Fotogramas",

        // Tech Optimization
        "tech_opt_title": "Técnicas de Optimización",
        "tech1_title": "Batching Estático",
        "tech1_desc": "Mallas agrupadas compartiendo materiales. Permitió a la GPU renderizar en batches combinados en lugar de miles de llamadas individuales.",
        "tech2_title": "Atlasing de Texturas",
        "tech2_desc": "Combinadas múltiples texturas de objetos en atlases unificados, reduciendo dramáticamente cambios de estado y overhead de SetPass (2.5k → 31).",
        "tech3_title": "Eliminación de Mesh Collider",
        "tech3_desc": "Reemplazados mesh colliders excesivamente complejos con primitivas simplificadas Box Colliders para minimizar overhead físico.",
        "tech4_title": "Iluminación Baked",
        "tech4_desc": "Iluminación pre-calculada e utilización de Light Probes para elementos dinámicos, eliminando cálculos por fotograma en tiempo real.",
        "target_specs_title": "Especificaciones Objetivo",
        "spec_fps": "FPS (Alcanzado)",
        "spec_drawcalls_card": "Draw Calls",
        "spec_triangles_card": "Triángulos",
        "spec_setpass_card": "Llamadas SetPass",

        // Materials Section
        "mat_tag": "Optimización PBR & Texturas",
        "mat_title": "Channel Packing",
        "mat_desc": "Reducción de 60% en memoria de texturas usando optimización de canales RGBA. Un atlas reemplaza 5 texturas separadas.",

        // Channel Breakdown
        "chan_r": "Canal R",
        "chan_metallic": "Metálico",
        "chan_g": "Canal G",
        "chan_ao": "Oclusión Ambiental",
        "chan_b": "Canal B",
        "chan_roughness": "Rugosidad",
        "chan_a": "Canal A",
        "chan_mask": "Máscara / Detalle",
        "chan_rgba": "RGBA Combinado",
        "chan_final": "Atlas ORM Final",

        // Benefits
        "benefits_title": "Beneficios del Channel Packing",
        "ben1_title": "Reducción de 60% en Memoria de Texturas",
        "ben1_desc": "Combina Metálico (R), Oclusión Ambiental (G), Rugosidad (B) en textura RGBA única. Ahorros de ancho de banda verificados con Unity Profiler.",
        "ben2_title": "Muestra de Textura Única",
        "ben2_desc": "GPU lee un archivo en lugar de tres. Reduce instrucciones de fragment shader. Mejora localidad de caché.",
        "ben3_title": "Pipeline de Assets Escalable",
        "ben3_desc": "Nuevos objetos se integran en atlas existente sin aumentar draw calls o SetPass calls. Arquitectura a prueba de futuro.",

        // Shader Section
        "shader_tag": "Technical Art & Shaders",
        "shader_main_title": "Sticker 2D",
        "shader_desc": "¿Cómo convertir un modelo 3D en una ilustración 2D? Desarrollé un workflow combinando Grease Pencil y Composición para lograr este aspecto 'dibujado a mano'.",
        "step1": "Contornos Limpios con Grease Pencil",
        "step2": "Composición: Dilatar/Erosionar Borde de Sticker",
        "step3": "Sparkles & Highlights Estilo Anime",
        "btn_tutorial": "Tutorial Completo",
        "slider_raw": "Raw Render",
        "slider_final": "Shader Final",

        // Lighting Section
        "light_tag": "Simulador ECOE",
        "light_title": "Iluminación & Optimización",
        "light_desc": "Estrategia de GI baked para entorno clínico. 20 luces Point/Spot + Reflection Probes. Sin costo en tiempo real.",
        "light_vid_title": "Global Illumination Baked",
        "light_vid_sub": "Lightmaps 512px + Rejilla de Light Probes",
        "light_conf_title": "Configuración de Iluminación",
        "lc1_title": "GI Baked",
        "lc1_desc": "Lightmaps 512px. Rebotes indirectos pre-calculados. Cero costo en tiempo real.",
        "lc2_title": "20 Luces Point/Spot",
        "lc2_desc": "Simulan fluorescentes (5500K). Solo baked. Objetos dinámicos usan Light Probes.",
        "lc3_title": "Reflection Probes",
        "lc3_desc": "Capturas de cubemap. Permiten reflejos realistas en materiales sin costo en tiempo real.",
        "spec_lm_label": "Resolución de Lightmap",
        "spec_lm_val": "512 píxeles",
        "spec_lp_label": "Espaciado de Light Probes",
        "spec_lp_val": "1.5 metros",

        // Assets Section
        "asset_tag": "Asset Pipeline",
        "asset_title": "Assets Modulares",
        "asset_sub": "Modelos 3D listos para juego con enfoque en optimización",
        "tab_gameready": "Listos para Juego",
        "tab_highpoly": "High Poly",
        "asset1_name": "Muro de Pueblo Modular",
        "asset1_sub": "Conjunto de Entorno · 2026",
        "asset2_name": "Cofre Mágico Antiguo",
        "asset2_sub": "Hero Prop · Animado",
        "asset3_name": "Pase de Sculpt Detallado",
        "asset3_sub": "Asset Raw de ZBrush",
        "pill_opt": "Optimizado",
        "pill_hero": "Hero Prop",
        "pill_highpoly": "High Poly",
        "card_tri": "Triángulos",
        "card_texel": "Densidad Texel",
        "card_maps": "Mapas",
        "card_subs": "Subdivisiones",

        // Rendering Settings
        "tool_tag": "Herramienta Educativa",
        "tool_title": "Configuración de Renderizado",
        "tool_desc": "Toggles interactivos para visualizar impacto de optimización. Inspecciona cómo cada técnica afecta velocidad de fotogramas y calidad.",
        "set_light": "Iluminación Baked",
        "set_light_sub": "Sin GPU · +0 draw calls",
        "set_post": "Post-Procesamiento",
        "set_post_sub": "AO · Bloom · Color Grading",
        "set_shadow": "Calidad de Sombras",
        "set_shadow_sub": "Tradeoff Calidad/Rendimiento",
        "opt_high": "Alta Resolución",
        "opt_med": "Resolución Media",
        "opt_low": "Baja / Deshabilitado",
        "set_part": "Efectos de Partículas",
        "set_part_sub": "Polvo & elementos atmosféricos",
        "set_ref": "Reflejos en Tiempo Real",
        "set_ref_sub": "SSR deshabilitado · Usa probes",
        "perf_est": "Rendimiento Estimado",
        "tool_note": "Esta es una visualización educativa. El simulador logra 120+ FPS con todos los ajustes de calidad habilitados. Alterna opciones para comprender el costo de rendimiento de cada técnica de optimización.",

        // Technical Stack
        "stack_tag": "Herramientas & Tecnologías",
        "stack_title": "Stack Técnico",
        "stack_desc": "Software de producción y configuración del motor utilizados para el desarrollo del Simulador ECOE.",
        "stack_box1_title": "Modelado 3D",
        "s1_i1": "Blender",
        "s1_i1_sub": "(avanzado)",
        "s1_i2": "3ds Max (rigging)",
        "s1_i3": "SketchUp (blockout)",
        "stack_box2_title": "Renderizado & Shaders",
        "s2_i1": "Unity URP",
        "s2_i2": "Shader Graph",
        "s2_i3": "Bases HLSL",
        "stack_box3_title": "Optimización",
        "s3_i1": "Unity Profiler",
        "s3_i2": "Frame Debugger basics",
        "s3_i3": "Static Batching",
        "s3_i4": "Occlusion Culling",
        "stack_box4_title": "Texturizado",
        "s4_i1": "Substance Painter",
        "s4_i2": "Blender Compositor",
        "s4_i3": "Channel Packing (ORM)",
        "stack_box5_title": "Pipeline",
        "s5_i1": "UV Unwrap (Avanzado)",
        "s5_i2": "Texture Baking",
        "s5_i3": "Normal Maps",
        "stack_box6_title": "Control de Versiones",
        "s6_i1": "Git / GitHub",
        "s6_i2": "GitHub Desktop",
        "s6_i3": "Agile/Scrum",
        "s6_i4": "Jira (tracking)",

        // Gallery Section - ACTUALIZADO
        "gallery_title": "Galería Técnica",
        "filter_all": "Todos los Trabajos",
        "filter_env": "Entornos",
        "filter_props": "Props & Objetos",
        "filter_characters": "Personajes",
        "filter_seasonal": "Temático",
        "filter_concept": "Conceptos",
        "filter_artwork": "Arte 3D",
        "filter_sculpt": "Escultura",
        "filter_materials": "Materiales",

        // CTA
        "cta_title": "Construyamos algo optimizado",
        "cta_sub": "Technical art para rendimiento en tiempo real",
        "cta_btn_contact": "Contacto",
        "cta_btn_cv": "CV",

        // Footer
        "footer_tagline": "Artista 3D Técnica | Optimización en Tiempo Real",
        "footer_explore": "Explorar",
        "footer_artwork": "Technical Art",
        "footer_games": "Juegos & Sims",
        "footer_touch": "Mantente en Contacto",
        "footer_contact_form": "Formulario de Contacto",
        "footer_email": "Envíame un Email",
        "footer_note": "Disponible para trabajos freelance y colaboración.",
        "footer_rights": "Todos los Derechos Reservados.",
        "footer_credit": "Construido con precisión técnica y Blender",
    },

    en: {
        // Meta
        "meta_title": "Artwork Gallery - Nuria Serrano | 3D & Technical Artist",

        // Hero Section
        "hero_eyebrow": "✦ TECHNICAL ART PORTFOLIO",
        "hero_title_1": "3D Environment",
        "hero_title_2": "Optimization",
        "hero_subtitle": "Real-time rendering, technical pipeline optimization, and shader development for professional simulation and interactive experiences.",

        // Navigation
        "nav_home": "Home",
        "nav_work": "Work",
        "nav_artwork": "3D & Technical Art",
        "nav_games": "Games & Sims",
        "nav_about": "About me",
        "nav_resume": "Resumé",
        "nav_contact": "Contact",

        // Side Navigation
        "side_featured": "Featured",
        "side_technical": "Technical",
        "side_materials": "Materials",
        "side_lighting": "Lighting",
        "side_gallery": "Gallery",

        // Featured Section
        "feat_tag": "Full Pipeline Project",
        "feat_title": "ECOE 3D Simulator",
        "feat_desc": "Complete technical direction for a clinical simulation platform. 5+ months developing modular PBR assets, implementing shader graph solutions, optimizing render pipeline, and compositing post-processing effects for real-time performance.",
        "render_view": "Render View",
        "tech_breakdown": "Technical Breakdown",
        "spec_triangles": "Triangles",
        "spec_drawcalls": "Draw Calls",
        "spec_textures": "Atlased Textures",
        "spec_lighting": "Lighting",
        "spec_lighting_val": "Hybrid",

        // Stats
        "stat_mat_variants": "Material Variants",
        "stat_tex_maps": "Texture Maps",
        "stat_pipeline": "Pipeline",
        "stat_target_perf": "Target Performance",

        // Subcards
        "sub1_title": "Topology & Wireframe",
        "sub1_desc": "Clean quad-based topology. Optimized edge flow for deformation, supporting modular assembly across scenes.",
        "sub2_title": "Efficient UVs & Atlasing",
        "sub2_desc": "Channel-packed RGBA maps. Consistent texel density (512px/m). Multiple materials sharing single atlas.",
        "sub3_title": "Hybrid Lighting Approach",
        "sub3_desc": "Baked GI + Light Probes + Real-time lights. Compositing passes for post-pro mood and ambient occlusion.",

        // Optimization Section
        "opt_tag": "Performance Metrics & Pipeline",
        "opt_title": "Technical Optimization",
        "opt_desc": "ECOE Simulator: From 2,000 draw calls to 200. Real-time profiling data from Unity Profiler.",
        "opt_before": "Before Optimization (Raw Import)",
        "opt_after": "After Optimization (Best Practices)",
        "perf_comp_title": "Performance Comparison",
        "table_setpass": "SetPass Calls",
        "table_drawcalls": "Draw Calls",
        "table_triangles": "Triangles",
        "table_framerate": "Frame Rate",

        // Tech Optimization
        "tech_opt_title": "Optimization Techniques",
        "tech1_title": "Static Batching",
        "tech1_desc": "Grouped meshes sharing materials. Allowed the GPU to render in combined batches rather than thousands of individual calls.",
        "tech2_title": "Texture Atlasing",
        "tech2_desc": "Combined multiple object textures into unified atlases, drastically dropping state changes and SetPass overhead (2.5k → 31).",
        "tech3_title": "Mesh Collider Removal",
        "tech3_desc": "Replaced overly complex mesh colliders with simplified primitive Box Colliders to minimize physics overhead.",
        "tech4_title": "Baked Lighting",
        "tech4_desc": "Pre-calculated illumination and utilized Light Probes for dynamic elements, eliminating real-time per-frame calculations.",
        "target_specs_title": "Target Specifications",
        "spec_fps": "FPS (Achieved)",
        "spec_drawcalls_card": "Draw Calls",
        "spec_triangles_card": "Triangles",
        "spec_setpass_card": "SetPass Calls",

        // Materials Section
        "mat_tag": "PBR & Texture Optimization",
        "mat_title": "Channel Packing",
        "mat_desc": "60% memory reduction using RGBA channel optimization. One atlas replaces 5 separate textures.",

        // Channel Breakdown
        "chan_r": "R Channel",
        "chan_metallic": "Metallic",
        "chan_g": "G Channel",
        "chan_ao": "Ambient Occlusion",
        "chan_b": "B Channel",
        "chan_roughness": "Roughness",
        "chan_a": "A Channel",
        "chan_mask": "Mask / Detail",
        "chan_rgba": "RGBA Combined",
        "chan_final": "Final ORM Atlas",

        // Benefits
        "benefits_title": "Channel Packing Benefits",
        "ben1_title": "60% Texture Memory Reduction",
        "ben1_desc": "Combines Metallic (R), Ambient Occlusion (G), Roughness (B) in single RGBA texture. Bandwidth savings verified with Unity Profiler.",
        "ben2_title": "Single Texture Sample",
        "ben2_desc": "GPU reads one file instead of three. Reduces fragment shader instructions. Improves cache locality.",
        "ben3_title": "Scalable Asset Pipeline",
        "ben3_desc": "New objects integrate into existing atlas without increasing draw calls or SetPass calls. Future-proof architecture.",

        // Shader Section
        "shader_tag": "Technical Art & Shaders",
        "shader_main_title": "Pastel 2D Sticker FX",
        "shader_desc": "How to convert a 3D model into a 2D illustration? I developed a workflow combining Grease Pencil and Compositing to achieve this 'hand-drawn' look.",
        "step1": "Clean Outlines with Grease Pencil",
        "step2": "Compositing: Dilate/Erode Sticker Border",
        "step3": "Anime Style Sparkles & Highlights",
        "btn_tutorial": "Full Tutorial",
        "slider_raw": "Raw Render",
        "slider_final": "Final Shader",

        // Lighting Section
        "light_tag": "ECOE Simulator",
        "light_title": "Lighting & Optimization",
        "light_desc": "Baked GI strategy for clinical environment. 20 Point/Spot lights + Reflection Probes. Real-time free.",
        "light_vid_title": "Baked Global Illumination",
        "light_vid_sub": "Lightmaps 512px + Light Probes Grid",
        "light_conf_title": "Lighting Configuration",
        "lc1_title": "Baked GI",
        "lc1_desc": "Lightmaps 512px. Indirect bounces precalculated. Zero real-time cost.",
        "lc2_title": "20 Point/Spot Lights",
        "lc2_desc": "Simulate fluorescents (5500K). Baked only. Dynamic objects use Light Probes.",
        "lc3_title": "Reflection Probes",
        "lc3_desc": "Cubemap captures. Enable realistic reflections on materials without real-time cost.",
        "spec_lm_label": "Lightmap Resolution",
        "spec_lm_val": "512 pixels",
        "spec_lp_label": "Light Probe Spacing",
        "spec_lp_val": "1.5 meters",

        // Assets Section
        "asset_tag": "Asset Pipeline",
        "asset_title": "Modular Assets",
        "asset_sub": "Game-ready 3D models with optimization focus",
        "tab_gameready": "Game Ready",
        "tab_highpoly": "High Poly",
        "asset1_name": "Modular Town Wall",
        "asset1_sub": "Environment Set · 2026",
        "asset2_name": "Ancient Magic Chest",
        "asset2_sub": "Hero Prop · Animated",
        "asset3_name": "Detailed Sculpt Pass",
        "asset3_sub": "ZBrush Raw Asset",
        "pill_opt": "Optimized",
        "pill_hero": "Hero Prop",
        "pill_highpoly": "High Poly",
        "card_tri": "Triangles",
        "card_texel": "Texel D.",
        "card_maps": "Maps",
        "card_subs": "Subdivisions",

        // Rendering Settings
        "tool_tag": "Educational Tool",
        "tool_title": "Rendering Settings",
        "tool_desc": "Interactive toggles to visualize optimization impact. Inspect how each technique affects frame rate and quality.",
        "set_light": "Baked Lighting",
        "set_light_sub": "GPU-free · +0 draw calls",
        "set_post": "Post-Processing",
        "set_post_sub": "AO · Bloom · Color Grading",
        "set_shadow": "Shadow Quality",
        "set_shadow_sub": "Quality/Performance tradeoff",
        "opt_high": "High Resolution",
        "opt_med": "Medium Resolution",
        "opt_low": "Low / Disabled",
        "set_part": "Particle Effects",
        "set_part_sub": "Dust & atmospheric elements",
        "set_ref": "Real-time Reflections",
        "set_ref_sub": "SSR disabled · Uses probes",
        "perf_est": "Estimated Performance",
        "tool_note": "This is an educational visualization. The simulator achieves 120+ FPS with all quality settings enabled. Toggle options to understand the performance cost of each optimization technique.",

        // Technical Stack
        "stack_tag": "Tools & Technologies",
        "stack_title": "Technical Stack",
        "stack_desc": "Production software and engine configuration used for ECOE Simulator development.",
        "stack_box1_title": "3D Modeling",
        "s1_i1": "Blender",
        "s1_i1_sub": "(advanced)",
        "s1_i2": "3ds Max (rigging)",
        "s1_i3": "SketchUp (blockout)",
        "stack_box2_title": "Rendering & Shaders",
        "s2_i1": "Unity URP",
        "s2_i2": "Shader Graph",
        "s2_i3": "HLSL basics",
        "stack_box3_title": "Optimization",
        "s3_i1": "Unity Profiler",
        "s3_i2": "Frame Debugger basics",
        "s3_i3": "Static Batching",
        "s3_i4": "Occlusion Culling",
        "stack_box4_title": "Texturing",
        "s4_i1": "Substance Painter",
        "s4_i2": "Blender Compositor",
        "s4_i3": "Channel Packing (ORM)",
        "stack_box5_title": "Pipeline",
        "s5_i1": "UV Unwrap (Advanced)",
        "s5_i2": "Texture Baking",
        "s5_i3": "Normal Maps",
        "stack_box6_title": "Version Control",
        "s6_i1": "Git / GitHub",
        "s6_i2": "GitHub Desktop",
        "s6_i3": "Agile/Scrum",
        "s6_i4": "Jira (tracking)",

        // Gallery Section - UPDATED
        "gallery_title": "Technical Gallery",
        "filter_all": "All Works",
        "filter_env": "Environments",
        "filter_props": "Props & Assets",
        "filter_characters": "Characters",
        "filter_seasonal": "Seasonal",
        "filter_concept": "Concepts",
        "filter_artwork": "3D Artwork",
        "filter_sculpt": "Sculpting",
        "filter_materials": "Materials",

        // CTA
        "cta_title": "Let's build something optimized",
        "cta_sub": "Technical art for real-time performance",
        "cta_btn_contact": "Contact",
        "cta_btn_cv": "CV",

        // Footer
        "footer_tagline": "3D Technical Artist | Real-time Optimization",
        "footer_explore": "Explore",
        "footer_artwork": "Technical Art",
        "footer_games": "Games & Sims",
        "footer_touch": "Get in Touch",
        "footer_contact_form": "Contact Form",
        "footer_email": "Email Me",
        "footer_note": "Available for freelance & collaboration.",
        "footer_rights": "All Rights Reserved.",
        "footer_credit": "Built with technical precision & Blender",
    }
};

// ======================
// TRANSLATION SYSTEM
// ======================
let currentLanguage = localStorage.getItem('language') || 'en';

function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = artworkTranslations[currentLanguage][key];
        if (translation) {
            el.textContent = translation;
        }
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    
    translatePage();
}

// Language toggle button
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLanguage === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });
    
    // Set initial button text
    langToggle.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
}

// Apply translations on page load
window.addEventListener('DOMContentLoaded', () => {
    translatePage();
});

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { artworkTranslations, setLanguage };
}