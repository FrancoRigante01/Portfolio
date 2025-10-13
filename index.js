/*
 * Muestra el modal de descarga del CV
 */
function confirmDownloadCV() {
    document.getElementById('cv-modal').style.display = 'flex';
}

/*
 * Cierra el modal al hacer click en la X
 */
document.getElementById('close-modal').onclick = function() {
    document.getElementById('cv-modal').style.display = 'none';
};

/*
 * Cierra el modal al hacer click en "Cancelar"
 */
document.getElementById('cancel-cv').onclick = function() {
    document.getElementById('cv-modal').style.display = 'none';
};

/*
 * Descarga el CV y cierra el modal
 */
document.getElementById('download-cv').onclick = function() {
    window.location.href = 'assets/CV.FrancoR.pdf';
    document.getElementById('cv-modal').style.display = 'none';
};

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
