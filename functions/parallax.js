/**
 * Crea un efecto parallax en los elementos seleccionados al hacer scroll.
 * 
 * @param {string} selector - El selector CSS de los elementos con efecto parallax.
 * @param {number} velocidad - La velocidad del efecto parallax (0.1 recomendado).
 */
function efectoParallax(selector, velocidad = 0.1) {
    // Selecciona todos los elementos que coinciden con el selector
    const elementos = document.querySelectorAll(selector);

    /**
     * Maneja el evento de scroll y aplica la transformación parallax.
     */
    function actualizarParallax() {
        const desplazamientoY = window.scrollY;
        elementos.forEach(elemento => {
            // Aplica la transformación parallax según la velocidad dada
            elemento.style.transform = `translateY(${desplazamientoY * velocidad}px)`;
        });
    }

    // Añade el event listener para el scroll
    window.addEventListener('scroll', actualizarParallax);

    // Actualiza la posición inicial
    actualizarParallax();
}

// Ejemplo de uso:
// efectoParallax('.parallax', 0.2);