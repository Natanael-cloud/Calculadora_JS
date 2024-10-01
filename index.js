

function outcome() {
// Define a função 'outcome' que será chamada para realizar operações matemáticas
    
    let num1 = Number(document.getElementById('num-one').value)
    // Obtém o valor inserido no campo com o id 'num-one', converte para número e armazena em 'num1'.
    let num2 = Number(document.getElementById('num-two').value)
        // Obtém o valor inserido no campo com o id 'num-two', converte para número e armazena em 'num2'.
    let total = 0
    //Inicializa a variável 'total' com o valor 0, que será usada para armazenar o resultado da operação.

    if (document.getElementById('box1').checked)
        total = num1 + num2
    // Verifica se a caixa de seleção com o id 'box1' (adição) está marcada. Se estiver, soma 'num1' e 'num2'.
    else if (document.getElementById('box2').checked)
        total = num1 - num2
    // Se a caixa de seleção com o id 'box2' (subtração) estiver marcada, subtrai 'num2' de 'num1'.
    else if (document.getElementById('box3').checked)
        total = num1 * num2
    // Se a caixa de seleção com o id 'box3' (multiplicação) estiver marcada, multiplica 'num1' por 'num2'
    else
        total = num1 / num2
        // Se nenhuma das opções anteriores estiver marcada, realiza a divisão de 'num1' por 'num2' como operação padrão.
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total)
    // Exibe o resultado da operação na área com o id 'resultArea', convertendo o valor numérico de 'total' em string
}
