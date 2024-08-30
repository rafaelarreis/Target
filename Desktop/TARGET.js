//questao 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K++;
    SOMA += K;
}

console.log(`O valor da variável SOMA é igual a ${SOMA}`);

//questao 2
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

//questao 3
const faturamentoJSON = `{
    "faturamento": [
      { "dia": 1, "valor": 5000 },
      { "dia": 2, "valor": 0 },
      { "dia": 3, "valor": 6000 },
      { "dia": 4, "valor": 4000 },
      { "dia": 5, "valor": 0 },
      { "dia": 6, "valor": 0 },
      { "dia": 7, "valor": 7000 },
      { "dia": 8, "valor": 8000 }
    ]
  }`;
  
  function processarFaturamento(faturamentoJSON) {
      const dados = JSON.parse(faturamentoJSON).faturamento;
  
      let menorValor = Infinity;
      let maiorValor = -Infinity;
      let somaValores = 0;
      let diasComFaturamento = 0;
  
      dados.forEach(dia => {
          if (dia.valor > 0) {
              somaValores += dia.valor;
              diasComFaturamento++;
              if (dia.valor < menorValor) menorValor = dia.valor;
              if (dia.valor > maiorValor) maiorValor = dia.valor;
          }
      });
  
      const mediaMensal = diasComFaturamento > 0 ? somaValores / diasComFaturamento : 0;
  
      let diasAcimaMedia = 0;
      dados.forEach(dia => {
          if (dia.valor > mediaMensal) {
              diasAcimaMedia++;
          }
      });
  
      return {
          menorValor,
          maiorValor,
          diasAcimaMedia
      };
  }
  
  const resultado = processarFaturamento(faturamentoJSON);
  console.log(`Menor valor de faturamento: R$ ${resultado.menorValor}`);
  console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor}`);
  console.log(`Número de dias com faturamento acima da média mensal: ${resultado.diasAcimaMedia}`);

  //questao 4
  const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentuais(faturamentoPorEstado) {
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
    
    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento * 100).toFixed(2);
        percentuais[estado] = `${percentual}%`;
    }

    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);
console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}`);
}

//questao 5
function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const stringOriginal = "Target Sistemas";
const stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida);