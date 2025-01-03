const form = document.getElementById('form');
const nome = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaDados();
    atualizaTabela();
})

function adicionaDados(){
    const inputNome = document.getElementById('nome-pessoa');
    const inputTelefone = document.getElementById('numero-pessoa');

    if (nome.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi inserido`);
    } else {
        nome.push(inputNome.value);
        telefone.push(inputTelefone.value); // Mantido como string

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
