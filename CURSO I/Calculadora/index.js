function resultado() {
    let num1 = Number(document.getElementById('num-one').value);
    let num2 = Number(document.getElementById('num-two').value);
    let total = 0;

    if (isNaN(num1) || isNaN(num2)) {
        // Exibe uma mensagem de erro se algum dos campos não for um número válido
        document.getElementById('resultArea').innerHTML = 'Por favor, insira números válidos.';
        return;
    }
    
    if (document.getElementById('box1').checked) 
        total = num1 + num2;
    else if (document.getElementById('box2').checked) 
        total = num1 - num2;
    else if (document.getElementById('box3').checked) 
        total = num1 * num2;
    else 
        total = (num1 / num2).toFixed(3);
    
    document.getElementById('resultArea').innerHTML = 'Resultado: ' + String(total);
}


