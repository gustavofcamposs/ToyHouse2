function setupClickPopup() {

    // Buscar os elementos pelo ID
    const nav = document.getElementById("navItem1");
    const pop = document.getElementById("item1");

    let isPopupVisible = false; // Controla se o popup está visível

    // Função para mostrar o popup
    const showPopup = () => {
        pop.style.display = 'flex';

        /* Fazendo a 'animação' */
        pop.style.visibility = 'visible';   // Torna o popup visível no layout
        pop.style.opacity = '1';            // Aumenta a opacidade para 1 (totalmente visível)
        pop.style.transform = 'translateY(0)'; // Move o popup para a posição original
        isPopupVisible = true;
    };


    // Função para esconder o popup
    const hidePopup = () => {

        // Aplica assim que a função é executado.
        pop.style.opacity = '0';
        pop.style.transform = 'translateY(-20px)'; -

        /* O que é o timeout? 
        Atraso com setTimeout: O setTimeout serve para atrasar a execução
        do código que vem dentro dele. No seu caso, o código dentro do setTimeout
        será executado após 300 milissegundos. O valor de 300 é o tempo que o JavaScript
        irá aguardar antes de aplicar as mudanças de visibility e display.*/
        setTimeout(() => {
            pop.style.visibility = 'hidden';  // Torna o popup invisível e não interativo
            pop.style.display = 'block';       // Esconde o popup completamente após a transição
        }, 300); // 300 milissegundos depois de aplicar o css que está fora do Timeout, ele aplica o que está dentro dele;

        isPopupVisible = false;               // Marca o popup como invisível
    };


    // Alternar o popup ao clicar no nav
    nav.addEventListener('click', () => {
        if (isPopupVisible) {
            hidePopup();
        } else {
            showPopup();
        }
    });

    // Monitora o mouse para esconder o popup
    document.addEventListener('mouseover', (event) => {
        const isCursorInside = 
            nav.contains(event.target) || // Cursor está no nav
            pop.contains(event.target);  // Cursor está no popup

        if (!isCursorInside && isPopupVisible) {
            hidePopup(); // Fecha o popup se o cursor sair de nav e pop
        }
    });
}

// Chama a função para configurar o popup
setupClickPopup();