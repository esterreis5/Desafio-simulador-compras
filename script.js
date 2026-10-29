function fazerCompra() {
    // 1. Preços dos produtos
    let precoBurguer = 20;
    let precoBatata = 10;
    let precoRefri = 5;

    // 2. Pergunta as quantidades e converte para número
    let qtdBurguer = Number(prompt("Quantos Hambúrgueres você quer?"));
    let qtdBatata = Number(prompt("Quantas Batatas Fritas você quer?"));
    let qtdRefri = Number(prompt("Quantos Refrigerantes você quer?"));

    // 3. Se tudo for zero, avisa e para o código
    if (qtdBurguer === 0 && qtdBatata === 0 && qtdRefri === 0) {
        alert("Você não escolheu nenhum produto!");
        return; 
    }

    // 4. Calcula o valor de cada um
    let totalBurguer = qtdBurguer * precoBurguer;
    let totalBatata = qtdBatata * precoBatata;
    let totalRefri = qtdRefri * precoRefri;

    // 5. Calcula o total geral da compra
    let totalGeral = totalBurguer + totalBatata + totalRefri;

    // 6. Mostra o resultado final na tela
    alert(
        "--- RESUMO DO PEDIDO ---\n\n" +
        "Hambúrguer: " + qtdBurguer + "x = R$ " + totalBurguer + ",00\n" +
        "Batata Frita: " + qtdBatata + "x = R$ " + totalBatata + ",00\n" +
        "Refrigerante: " + qtdRefri + "x = R$ " + totalRefri + ",00\n\n" +
        "TOTAL DA COMPRA: R$ " + totalGeral + ",00"
    );
}
