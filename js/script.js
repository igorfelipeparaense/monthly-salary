const result = document.getElementById('resultado');

document.getElementById('calcular').addEventListener('click', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let salFixo = document.getElementById('salFixo').value;
    let totVendas = document.getElementById('totVendas').value;

    if(nome !== '' && salFixo !== '' && totVendas !== '') {
        document.querySelector('#erro1').textContent = '';
        document.querySelector('#erro2').textContent = '';
        document.querySelector('#erro3').textContent = '';
        let salFixoFormat = parseFloat(salFixo);
        let totalVendasFormat = parseFloat(totVendas);
        let comissao = totalVendasFormat * 0.15;
        let salFinal = parseFloat(salFixoFormat + comissao).toFixed(2);

        let vendedores = [
            {
                nome,
                salFixoFormat,
                totalVendasFormat,
                salFinal
            }
        ];
        vendedores.map(vend => {
            const [tbodyRef] = document.getElementById('myTable').getElementsByTagName('tbody'),
                newRow = tbodyRef.insertRow(),
                newCellNome = newRow.insertCell(),
                newCellSalarioFix = newRow.insertCell(),
                newCellTotVendas = newRow.insertCell(),
                newCellSalarioFinal = newRow.insertCell();
        
            newCellNome.textContent = vend.nome;
            newCellSalarioFix.textContent = vend.salFixoFormat;
            newCellTotVendas.textContent = vend.totalVendasFormat;
            newCellSalarioFinal.textContent = vend.salFinal;
        })

        clearFields();
    } else {
        document.querySelector('#erro1').textContent = "campo obrigatório*";
        document.querySelector('#erro2').textContent = "campo obrigatório*";
        document.querySelector('#erro3').textContent = "campo obrigatório*";
    }
});

const clearFields = () => {
    let nome = document.getElementById('nome').value = "";
    let salFixo = document.getElementById('salFixo').value = "";
    let totVendas = document.getElementById('totVendas').value = "";
}