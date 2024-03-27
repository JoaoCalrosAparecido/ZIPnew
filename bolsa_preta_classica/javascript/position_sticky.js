// Selecione o elemento que deseja tornar sticky
const positionSticky = document.getElementById('position_sticky');

// Selecione a seção do rodapé
const rodape = document.querySelector('.rodape');

// Obtenha a posição inicial do elemento sticky
const initialStickyTop = positionSticky.offsetTop;

// Adicione um evento de scroll para verificar a posição enquanto a página é rolada
window.addEventListener('scroll', function() {
    // Obtenha a posição atual da barra de rolagem
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Obtenha a altura do rodapé
    const rodapeHeight = rodape.offsetHeight;

    // Calcule a posição onde o sticky deve parar
    const stopPosition = rodape.offsetTop - positionSticky.offsetHeight;

    // Verifique se a posição atual da barra de rolagem ultrapassou a posição onde o sticky deve parar
    if (scrollTop >= stopPosition) {
        // Se ultrapassou, fixe o sticky no rodapé
        positionSticky.style.position = 'absolute';
        positionSticky.style.top = rodapeHeight - positionSticky.offsetHeight + 'px';
    } else {
        // Caso contrário, mantenha o sticky no lugar normal
        positionSticky.style.position = 'sticky';
        positionSticky.style.top = '120px';
    }
});
