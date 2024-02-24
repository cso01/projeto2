const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-atividade');
    const inputNumero = document.getElementById('numero-atividade');


let linha = '<tr>';
linha += `<td>${inputNome.value}</td`;

linha += `<td>${inputNumero.value}</td`;
linha += '</tr>';

const corpoTabela = document.querySelector('tbody')
corpoTabela.innerHTML = linha;

})

