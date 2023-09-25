function calcularIMC() {
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        // Exibe uma mensagem de erro se algum dos campos não for um número válido
        document.getElementById('resultArea').innerHTML = 'Por favor, insira números válidos.';
        return;
    }

    let imc = peso / (altura * altura)
    let resultado = ''

    if (imc < 17)
        resultado = 'Muito abaixo do peso'
    else if (imc >=17 && imc <=18.49)
        resultado = 'Abaixo do peso'
    else if (imc >=18.5 && imc <= 24.99)
        resultado = 'Peso Normal'
    else if (imc >=25 && imc <= 29.99)
        resultado = 'Acima do peso'
    else if (imc >=30 && imc <= 34.99)
        resultado = 'Obesidade I'
    else if (imc >=35 && imc <= 39.99)
        resultado = 'Obesidade II (serera)'
    else 
        resultado = 'Obesidade III (mórbita)'
    
        document.getElementById('resultArea').innerHTML = `Seu IMC é: ${imc.toFixed(2)} - ${resultado}`
    
    
    
    

}


