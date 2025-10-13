/*
 * Manejador del formulario de contacto
 * Valida los campos y muestra un mensaje según corresponda
 */
document.getElementById('contact-form').onsubmit = function(e) {
    var nombre = document.getElementById('nombre').value.trim(); 
    var email = document.getElementById('email').value.trim();   
    var mensaje = document.getElementById('mensaje').value.trim(); 
    var msg = document.getElementById('form-msg');
    if(!(nombre && email && mensaje)) {
        e.preventDefault();
        // Si falta algún campo, muestra mensaje de error
        msg.style.display = 'block';
        msg.style.color = 'red';
        msg.textContent = 'Por favor, completa todos los campos.';
    } else {
        msg.style.display = 'none';
    }
};
