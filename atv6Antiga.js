const nomeRestaurante1 = prompt("Informe o nome do primeiro restaurante:");
const nomeRestaurante2 = prompt("Informe o nome do segundo restaurante:");
const nomeRestaurante3 = prompt("Informe o nome do terceiro restaurante:");

const conta1 = prompt("Informe o valor da primeira conta:");
const conta2 = prompt("Informe o valor da segunda conta:");
const conta3 = prompt("Informe o valor da terceira conta:");

function calcularGorjeta(valor){
    let gorjeta=0;
    if(valor < 50){
        gorjeta = valor * 0.2;
    }else if(valor>=50 && valor<=200){
        gorjeta = valor * 0.15;
    }else if(valor > 200){
        gorjeta = valor * 0.1;
    }
    return gorjeta;
}
    const gorjeta1 = calcularGorjeta(conta1);
    const gorjeta2 = calcularGorjeta(conta2);
    const gorjeta3 = calcularGorjeta(conta3);

    const arrayNomes = [nomeRestaurante1, nomeRestaurante2, nomeRestaurante3];
    const arrayContas = [conta1, conta2, conta3];
    const arrayGorjetas = [gorjeta1, gorjeta2, gorjeta3];

    

    function recibo(arrayNomes, arrayContas, arrayGorjetas){
        for (let i = 0; i < arrayContas.length; i++) {
            let nome = arrayNomes[i];
            const conta = arrayContas[i];
            const gorjeta = arrayGorjetas[i];
            const soma = parseInt(conta) + parseInt(gorjeta);
            console.log(`${nome} - [Valor: R$ ${conta} | Gorjeta: R$ ${gorjeta} | Total: R$ ${soma}]`);
        }

    }

    recibo(arrayNomes, arrayContas, arrayGorjetas)