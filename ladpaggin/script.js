// console.log("ola, mundo!");

const botoesPopup = document.querySelectorAll(".botao-popup");
const elemPopup = document.querySelector(".popup");
const elemBotaofechar = document.querySelector(".botao-fechar");
const elemIconeDarkMode = document.querySelector(".img-icone");

// ---- Funções ----

// Abre popup
botoesPopup.forEach(botao => {
    botao.addEventListener("click", () => {
        elemPopup.style.display = "flex";
    });
});

// Fecha popup
elemBotaofechar.addEventListener("click", () => {
    elemPopup.style.display = "none";
});

// Atualiza ícone conforme o tema atual
function atualizarIconeDarkMode() {
    const estaDark = document.body.classList.contains("dark");

    if (estaDark) {
        elemIconeDarkMode.setAttribute("src", "assets/icone-lua.svg");
        elemIconeDarkMode.setAttribute("alt", "Ícone de Lua");
    } else {
        elemIconeDarkMode.setAttribute("src", "assets/icone-sol.svg");
        elemIconeDarkMode.setAttribute("alt", "Ícone de Sol");
    }
}

// Clique do dark mode
elemIconeDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    atualizarIconeDarkMode();
});

// Atualiza o ícone ao carregar a página (caso tema mude depois)
atualizarIconeDarkMode();
