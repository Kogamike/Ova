function abrirModal(titulo, descripcion) {
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalTexto').innerText = descripcion;
    document.getElementById('modalOverlay').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('modalOverlay');
    if (event.target === modal) {
        cerrarModal();
    }
};