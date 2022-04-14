/*
Script para o cálculo das operações 
matemáticas: 
    - Soma;
    - Subtração;
    - Multiplicação;
    - Divisão;
    - Resto.
Será necessário mais 2 variáveis para 
receber os números dos usuários
*/

var numero1;
var numero2;

// para obter o número digitado pelo usuário usaremos
// o comando prompt(que um input para dados)
numero1 = prompt("Digite um número","0");
numero2 = prompt("Digite outro número");

// Converter para inteiro com parseInt
var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

alert("O resultado das operações é:\n\n"+
        "Soma: "+soma +
        "\nSubtração: "+subtrair+
        "\nMultiplicação: "+multiplicar+
        "\nDivisão: "+dividir+
        "\nResto: "+resto);