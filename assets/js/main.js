document.addEventListener('DOMContentLoaded', () => {
    loadPage('campania', links);
    pieAnio= document.getElementById('pieAño');
    pieAnio.innerHTML = `&copy; ${new Date().getFullYear()} Ministerio Familia Cristiana`;
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
    let masinfo= document.getElementById('masinfo');
    masinfo.addEventListener('click', () => {
        loadPage('masinfo', atras);

    });
    let canciones= document.getElementById('canciones');
    canciones.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        loadPage('canciones', atras);

    });
    let devocionales= document.getElementById('devocionales');
    devocionales.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        loadPage('devocionales', atras);
        
    });
}

function atras(){
    let atras= document.getElementById('atras');
    atras.addEventListener('click', () => {
        loadPage('campania', links);
    });
}

