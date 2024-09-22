document.addEventListener('DOMContentLoaded', () => {
 

    // Cargar la página de inicio por defecto
    loadPage('campania');
    pieAnio= document.getElementById('pieAño');
    pieAnio.innerHTML = `&copy; ${new Date().getFullYear()} Ministerio Familia Cristiana`;
    // Manejar la navegación
   // setupNavigation();
});

function loadPage(pageName) {
    fetch(`assets/templates/${pageName}.handlebars`)
        .then(response => response.text())
        .then(source => {
            const template = Handlebars.compile(source);
            document.getElementById('content').innerHTML = template();
        });
}