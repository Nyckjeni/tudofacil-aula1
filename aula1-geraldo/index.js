// Seleciona o elemento com a classe "hamburguer" (o botão do menu)
const hamburguer = document.querySelector(".hamburguer"); 

// Seleciona o elemento com a classe "nav" (a barra de navegação)
const nav = document.querySelector(".nav");

// Adiciona um ouvinte de evento ao botão do hambúrguer
hamburguer.addEventListener("click", () => {
    // Alterna a classe "active" na barra de navegação (ativando ou desativando a exibição do menu)
    nav.classList.toggle("active");
});

