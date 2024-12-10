function clickMenu() {
    let submenu = document.getElementById('subMenu'); // Submenu
    let menu = document.getElementById('menu-hamburguer'); // Menu hambúrguer
    var estilos = window.getComputedStyle(menu); // Estilos aplicados ao menu

    // Se o menu estiver oculto (display: none)
    if (estilos.display === 'none') {
        menu.style.display = "flex"; // Torna o menu visível
        submenu.style.display = "none"; // Oculta o submenu
    } else {
        menu.style.display = "none"; // Esconde o menu
        submenu.style.display = "flex"; // Exibe o submenu
    }

    console.log('FLEX:' + estilos.display);
}


// Função que fecha o menu quando a página é rolada
function fecharMenuAoRolar() {
    let submenu = document.getElementById('subMenu'); // Submenu
    let menu = document.getElementById('menu-hamburguer');
    var estilos = window.getComputedStyle(menu);

    // Acessando o input dentro da label com id="hamburger"
    let input = document.querySelector('#hamburger input');

    // Se o menu estiver aberto e a página estiver rolando para baixo
    if (estilos.display === 'flex') {
        menu.style.display = "none"; // Fecha o menu
        submenu.style.display = "flex";
        input.checked = false;
    }
}

// Adiciona o event listener de rolagem
window.addEventListener('scroll', fecharMenuAoRolar);
