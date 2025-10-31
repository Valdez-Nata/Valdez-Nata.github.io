let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función para animar las barras de habilidad al hacer scroll
function efectoSkills(){
    var skillsSection = document.getElementById("skills");
    // Verificar si la sección de habilidades está en el viewport
    if (skillsSection) {
        var distancia_skills = window.innerHeight - skillsSection.getBoundingClientRect().top;
        if (distancia_skills >= 300) { // Ajusta este valor si necesitas que se active antes o después
            iniciarAnimacionBarras();
        }
    }
}

// Función para animar las barras de progreso una vez (se llama desde efectoSkills)
let skillsAnimadas = false; // Bandera para asegurar que la animación se ejecute una sola vez
function iniciarAnimacionBarras() {
    if (skillsAnimadas) return; // Si ya se animó, no hacer nada

    let progresos = document.querySelectorAll(".progreso");
    progresos.forEach(progreso => {
        const skillClass = Array.from(progreso.classList).find(cls => !['progreso'].includes(cls));
        if (skillClass) {
            let targetWidth = 0;
            switch(skillClass) {
                case 'splunk': targetWidth = 80; break;
                case 'loganalysis': targetWidth = 75; break;
                case 'linux': targetWidth = 70; break;
                case 'networking': targetWidth = 65; break;
                case 'python': targetWidth = 60; break;
                case 'threaddetection': targetWidth = 70; break;
                case 'git': targetWidth = 75; break;
                case 'resolucion': targetWidth = 85; break;
                case 'criticthought': targetWidth = 88; break;
                case 'detailoriented': targetWidth = 90; break;
                case 'continuouslearning': targetWidth = 95; break;
                case 'comunicacion': targetWidth = 80; break;
                case 'trabajo': targetWidth = 75; break;
                case 'proactivity': targetWidth = 85; break;
            }

            progreso.style.width = targetWidth + '%'; // Establece el ancho para la animación CSS

            const span = progreso.querySelector('span');
            if (span && !span.dataset.animated) {
                span.dataset.animated = 'true';
                let current = 0;
                let interval = setInterval(() => {
                    if (current >= targetWidth) {
                        clearInterval(interval);
                        span.textContent = targetWidth + '%'; // Asegura que el valor final sea exacto
                        return;
                    }
                    span.textContent = current + '%';
                    current++;
                }, 20); // Velocidad de la animación del número
            }
        }
    });
    skillsAnimadas = true; // Marca que las habilidades ya se animaron
}


// Detecta el scrolling para aplicar la animación de la barra de skills
window.onscroll = function(){
    efectoSkills();
};

// Asegurar que las barras se inicialicen correctamente al cargar la página si la sección ya está visible
window.onload = function() {
    efectoSkills(); // Llamar una vez al cargar por si la sección ya es visible
    // También para el menú responsivo, si lo tienes
    document.querySelector('.nav-responsive').addEventListener('click', mostrarOcultarMenu);
};
