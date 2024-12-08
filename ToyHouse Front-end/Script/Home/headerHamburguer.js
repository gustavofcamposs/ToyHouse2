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



// Adiciona um listener para o redimensionamento da janela
window.addEventListener('resize', function() {
    let menu = document.getElementById('menu-hamburguer');
    let button = document.getElementById('menu-button');
    var estilos = window.getComputedStyle(menu);

    // Se a largura da tela for maior que 1000px e o menu estiver visível
    if (window.innerWidth > 1000 && estilos.display !== 'none') {
        // Fecha o menu
        menu.style.display = "none";
        button.classList.remove('open'); // Remove a classe 'open' para reverter o ícone
    }
});