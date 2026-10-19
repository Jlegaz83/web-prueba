// Seleccionamos los elementos del DOM por su ID
const boton = document.getElementById('miBoton');
const mensaje = document.getElementById('mensaje');

// Escuchamos el evento 'click' en el botón
boton.addEventListener('click', function() {
  mensaje.textContent = "¡Bienvenido/a a la página de prueba! 🎉";
});