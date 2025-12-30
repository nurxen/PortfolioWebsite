// theme.js

// Colores extendidos de Tailwind
const themeColors = {
    'nb-blue': '#4F647D',
    'nb-brown': '#905757',
    'nb-white': '#FFFFFF',
    'nb-peach': '#F6D6CB',
    'nb-text-dark': '#3F3F3F',
    'nb-bg': '#FFF9F2',
    'nb-blue-dark': '#43647F',
    'nb-studio': '#121212'
};

// Cambiar fondo de cualquier elemento (todos los que coincidan)
function setBackgroundColor(selector, colorName) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    const color = themeColors[colorName];
    if (!color) {
        console.warn(`Color ${colorName} no encontrado en themeColors`);
        return;
    }
    elements.forEach(el => el.style.backgroundColor = color);
}

// Cambiar color de texto de cualquier elemento (todos los que coincidan)
function setTextColor(selector, colorName) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    const color = themeColors[colorName];
    if (!color) {
        console.warn(`Color ${colorName} no encontrado en themeColors`);
        return;
    }
    elements.forEach(el => el.style.color = color);
}
