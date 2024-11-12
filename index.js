function calcular() {
    // Seleção e conversão dos valores de entrada
    const numeroUm = parseFloat(document.getElementById('num-um').value.trim());
    const numeroDois = parseFloat(document.getElementById('num-dois').value.trim());
    const resultadoArea = document.getElementById('areaResultado');
    let operacaoSelecionada = document.querySelector('input[name="operacao"]:checked');
    let resultado;

    // Verificação de entradas válidas
    if (isNaN(numeroUm) || isNaN(numeroDois)) {
        resultadoArea.innerHTML = "Por favor, insira números válidos em ambos os campos!";
        resultadoArea.style.color = "red";
        return;
    }

    // Determinação da operação selecionada
    if (operacaoSelecionada) {
        operacaoSelecionada = operacaoSelecionada.value;
    } else {
        resultadoArea.innerHTML = "Selecione uma operação!";
        resultadoArea.style.color = "red";
        return;
    }

    // Cálculo com verificação para divisão por zero
    switch (operacaoSelecionada) {
        case "adicionar":
            resultado = numeroUm + numeroDois;
            break;
        case "subtrair":
            resultado = numeroUm - numeroDois;
            break;
        case "multiplicar":
            resultado = numeroUm * numeroDois;
            break;
        case "dividir":
            if (numeroDois === 0) {
                resultadoArea.innerHTML = "Erro: Divisão por zero não é permitida!";
                resultadoArea.style.color = "red";
                return;
            }
            resultado = numeroUm / numeroDois;
            break;
        default:
            resultadoArea.innerHTML = "Operação inválida!";
            resultadoArea.style.color = "red";
            return;
    }

    // Exibição do resultado formatado
    resultadoArea.innerHTML = `Resultado: <strong>${resultado.toFixed(2)}</strong>`;
    resultadoArea.style.color = "green"; // Cor verde para um resultado bem-sucedido
}

