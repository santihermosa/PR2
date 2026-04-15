document.getElementById('btnAccion').addEventListener('click', function() {
    alert('¡Hola! Este es un mensaje de alerta.');
});

document.getElementById('btnSalir').addEventListener('dblclick', function() {
    if (confirm('¿Estás seguro de que quieres salir?')) {
        window.close();
    }
});