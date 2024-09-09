//questao 1
function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    let temp;

    if (numero === a || numero === b) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    while (b < numero) {
        temp = b;
        b = a + b;
        a = temp;
    }

    if (b === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}

const numero = 21; //esse numero pertence à sequencia de Fibonacci
console.log(pertenceFibonacci(numero));

//questao 2
function contarLetraA(str) {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            contador++;
        }
    }

    return `A letra 'a' aparece ${contador} vezes.`;
}
const stringExemplo = "Abracadabra";
console.log(contarLetraA(stringExemplo)); 

//questão 3
let INDICE = 12, SOMA = 0, K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K; 
}

console.log(SOMA);

/*questao 4
a) 1, 3, 5, 7, = 9 A sequencia é crescente de numeros impares.
b) 2, 4, 8, 16, 32, 64, = 128 O proximo numero é sempre o numero atual vezes 2.
c) 0, 1, 4, 9, 16, 25, 36, = 49 A sequencia é feita pelo quadrado dos numeros inteiros a partir do 0 em ordem crescente. 
d) 4, 16, 36, 64, = 100 A sequencia é feita pelo quadrado dos numeros inteiros pares a partir do 2 em ordem crescente.
e) 1, 1, 2, 3, 5, 8, = 13 sequencia de Fibonacci
f) 2, 10, 12, 16, 17, 18, 19, = 

questão 5
Ligo o primeiro interruptor e deixo ligado por um tempo bom para que a lampada aqueça e depois desligo
Ligo o segundo interruptor e vou para uma das salas das lâmpadas.
Se lâmpada estiver acesa é controlada pelo segundo interruptor.
Se a lâmpada estiver apagada mas quente é controlada pelo primeiro interruptor.
Se lâmpada estiver apagada e fria é controlada pelo terceiro interruptor.
Verifico a segunda lampada com o mesmo criterio e assim consigo descobrir.
*/

