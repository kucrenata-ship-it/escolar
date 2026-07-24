// Função simples para salvar os nomes digitados no navegador
function salvarMapa() {
    const inputs = document.querySelectorAll('.aluno-input');
    const dadosSala = [];

    inputs.forEach((input, index) => {
        dadosSala.push({
            posicao: index + 1,
            nome: input.value
        });
    });

    // Salva no armazenamento local do navegador (LocalStorage)
    localStorage.setItem('mapaSala', JSON.stringify(dadosSala));
    alert('Disposição dos alunos salva com sucesso!');
}

// Carrega os nomes automaticamente quando a página abre
window.onload = function() {
    const dadosSalvos = localStorage.getItem('mapaSala');
    if (dadosSalvos) {
        const dadosSala = JSON.parse(dadosSalvos);
        const inputs = document.querySelectorAll('.aluno-input');
        
        inputs.forEach((input, index) => {
            if (dadosSala[index]) {
                input.value = dadosSala[index].nome;
            }
        });
    }
};
