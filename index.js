/**
 * Recupera y devuelve los valores de los campos del formulario de contacto.
 * @returns {{nombre: string, email: string, mensaje: string}}
 */
function obtenerValoresCampos() {
    return {
        nombre: document.getElementById('nombre').value.trim(),
        email: document.getElementById('email').value.trim(),
        mensaje: document.getElementById('mensaje').value.trim()
    };
}

/**
 * Valida que todos los campos requeridos estén completos.
 * @param {string} nombre - Nombre ingresado.
 * @param {string} email - Email ingresado.
 * @param {string} mensaje - Mensaje ingresado.
 * @returns {boolean} Verdadero si todos los campos están completos, falso en caso contrario.
 */
function camposCompletos(nombre, email, mensaje) {
    return nombre !== '' && email !== '' && mensaje !== '';
}

/**
 * Muestra un mensaje en el formulario de contacto.
 * @param {string} texto - Texto del mensaje a mostrar.
 * @param {string} color - Color del texto del mensaje (por ejemplo, 'red' o 'green').
 */
function mostrarMensajeFormulario(texto, color) {
    const msg = document.getElementById('form-msg');
    msg.style.display = 'block';
    msg.style.color = color;
    msg.textContent = texto;
}

/**
 * Oculta el mensaje del formulario de contacto.
 */
function ocultarMensajeFormulario() {
    document.getElementById('form-msg').style.display = 'none';
}

/**
 * Manejador del evento de envío del formulario de contacto, validando los campos.
 * @param {Event} e - Evento de envío de formulario.
 */
document.getElementById('contact-form').onsubmit = function(e) {
    const { nombre, email, mensaje } = obtenerValoresCampos();
    if (!camposCompletos(nombre, email, mensaje)) {
        e.preventDefault();
        mostrarMensajeFormulario('Por favor, completa todos los campos.', 'red');
    } else {
        ocultarMensajeFormulario();
    }
};
