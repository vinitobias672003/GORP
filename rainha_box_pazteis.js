function cria_tabela(quantidade){

    var quant = quantidade;

    // Crie a tabela
    var tabela = document.createElement('table');

    // Adicione a primeira linha à tabela
    var linha = tabela.insertRow();

    
    for (var i = 0; i < quantidade; i++) {
        var celula = linha.insertCell();
        celula.textContent = `texto` + (i + 1); // Adicione o conteúdo da célula

    }

    // Adicione a tabela ao elemento HTML que deseja exibir a tabela
    document.getElementById('tab').appendChild(tabela);
}