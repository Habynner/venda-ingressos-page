function comprar() {
    let choice = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;
    const qntChoice = document.getElementById('qtd').value;

    if (choice.value == 'pista') {
        comprarPista(qtd);
    }
    else if (choice.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarIferior(qtd);
    }
    console.log(choice.value);
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdNova = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdNova;
        alert(`Compra realizada com sucesso!`);
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior.textContent) {
        alert('Quantidade indisponível para tipo pista superior');
    } else {
        qtdNova = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdNova;
        alert('Compra realizada com sucesso!');
    }
}
function comprarIferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior.textContent) {
        alert('Quantidade indisponível para tipo pista inferior');
    } else {
        qtdNova = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdNova;
        alert('Compra realizada com sucesso!');
    }
}