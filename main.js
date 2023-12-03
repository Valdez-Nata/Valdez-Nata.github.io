function mostrarContenido(tabId) {
    // Oculta todos los contenidos de las pestañas
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(tabId).classList.add('active');

    // Marca como activa la pestaña seleccionada
    var tabs = document.querySelectorAll('#tabs li');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

function agregarNuevaPestana() {
    var numPestanas = document.querySelectorAll('#tabs li').length - 1;
    var nuevaPestana = document.createElement('li');
    nuevaPestana.textContent = 'Pestaña ' + (numPestanas + 1);
    nuevaPestana.onclick = function() {
        mostrarContenido('tab' + (numPestanas + 1));
    };

    // Agrega la nueva pestaña antes del botón de agregar
    var agregarBoton = document.querySelector('#tabs li:last-child');
    agregarBoton.parentNode.insertBefore(nuevaPestana, agregarBoton);

    // Crea el nuevo contenedor de contenido y lo agrega
    var nuevoContenido = document.createElement('div');
    nuevoContenido.id = 'tab' + (numPestanas + 1);
    nuevoContenido.className = 'tab-content';
    nuevoContenido.textContent = 'Contenido de la Pestaña ' + (numPestanas + 1);
    document.getElementById('content').appendChild(nuevoContenido);
}
