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

        let tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        
        for(let i = 0; i < vendedores.length; i++) {
            let newRow = tbodyRef.insertRow();
            let newCellNome = newRow.insertCell();
            let newCellSalarioFix = newRow.insertCell();
            let newCellTotVendas = newRow.insertCell();
            let newCellSalarioFinal = newRow.insertCell();

            newCellNome.textContent = vendedores[i].nome;
            newCellSalarioFix.textContent = vendedores[i].salFixoFormat;
            newCellTotVendas.textContent = vendedores[i].totalVendasFormat;
            newCellSalarioFinal.textContent = vendedores[i].salFinal;
        }
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