const numRestaurantes = prompt("Informe quantos restaurantes foram visitados");

let restaurantes = [];

 
const calcularGorjeta = function(){
   
    if(parseInt(this.conta) < 50){
        this.gorjeta = parseInt(this.conta) * 0.2;
    }else if(parseInt(this.conta)>=50 && parseInt(this.conta)<=200){
        this.gorjeta = parseInt(this.conta) * 0.15;
    }else if(parseInt(this.conta) > 200){
        this.gorjeta = parseInt(this.conta) * 0.1;  
    }
    return this.gorjeta;
}
const toString = function(){
    console.log(`${nome} - [Valor: R$ ${conta} | Gorjeta: R$ ${gorjeta} | Total: R$ ${valorT}]`);
}

const calcularValorTotal = function(){
    this.valorTotal = parseFloat(this.gorjeta)+parseFloat(this.conta);
    return this.valorTotal;
}


for (let i = 0; i < numRestaurantes; i++) {
    const nomeRestaurante = prompt("Informe o nome do restaurante:");
    const valorConta = prompt("Informe o valor da conta:");
    const restaurante = {
        nome : nomeRestaurante,
        conta : valorConta,
        gorjeta : undefined,
        valorTotal : undefined,
        calcularGorjeta,
        calcularValorTotal,
        toString,
    }
    restaurante.calcularGorjeta(); 
    restaurante.calcularValorTotal();
    restaurante.toString();  
    restaurantes.push(restaurante);
}


for (let i = 0; i < numRestaurantes; i++) {
        
    let nome = restaurantes[i].nome;
    const conta = restaurantes[i].conta;
    const gorjeta = restaurantes[i].gorjeta;
    const valorT = restaurantes[i].valorTotal;
    console.log(`${nome} - [Valor: R$ ${conta} | Gorjeta: R$ ${gorjeta} | Total: R$ ${valorT}]`);
}

   





