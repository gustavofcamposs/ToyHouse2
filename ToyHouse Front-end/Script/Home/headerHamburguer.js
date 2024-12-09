function clickMenu() {

    /* A variável 'menu' referencia o elemento HTML,
    e 'estilos' usa window.getComputedStyle(menu) para pegar os estilos aplicados ao menu no momento da chamada.*/


    let menu = document.getElementById('menu-hamburguer');
    var estilos = window.getComputedStyle(menu);


    // Se o menu estiver oculto (display: none)
    if (estilos.display === 'none') {

        menu.style.display = "flex"; //Torna Visivel
    } else {
        menu.style.display = "none";
    }

    console.log('FLEX:' + estilos.display);
}



