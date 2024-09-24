console.log('inicio')






document.addEventListener('DOMContentLoaded', () => {
 

    // Cargar la página de inicio por defecto
    loadPage('campania', links);
    pieAnio= document.getElementById('pieAño');
    pieAnio.innerHTML = `&copy; ${new Date().getFullYear()} Ministerio Familia Cristiana`;
    // Manejar la navegación
   // setupNavigation();
});

function loadPage(pageName, cb) {
    fetch(`assets/templates/${pageName}.handlebars`)
        .then(response => response.text())
        .then(source => {
            const template = Handlebars.compile(source);
            document.getElementById('content').innerHTML = template();
            console.log(cb)
            if(cb){
                cb();
            }
        });
}
function links(){
// let masinfo= document.getElementById('masinfo');
// masinfo.addEventListener('click', () => {
//     loadPage('masinfo', atras);
    
// });



    let canciones= document.getElementById('canciones');
    canciones.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('canciones', atras);
        
    });
// let predicacionDomingo= document.getElementById('predicacionDomingo');
// predicacionDomingo.addEventListener('click', () => {
//     loadPage('predica20240922', atras);
    
// });
}
function atras(){
    let atras= document.getElementById('atras');
    atras.addEventListener('click', () => {
        loadPage('campania', links);
    });
}

