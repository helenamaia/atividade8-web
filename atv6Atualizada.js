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
toString = function(){
    console.log(`${this.nome} - [Valor: R$ ${this.conta} | Gorjeta: R$ ${this.gorjeta} | Total: R$ ${this.valorTotal}]`);
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
        calcularGorjeta,
        calcularValorTotal,
        toString,
    }
    restaurante.calcularGorjeta(); 
    restaurante.calcularValorTotal();
     
    restaurantes.push(restaurante);
}

  restaurantes.calcularGastoTotal = function(){
    let gastoTotal = 0;
    for (let i = 0; i < numRestaurantes; i++) {
        gastoTotal = parseFloat(gastoTotal) + parseFloat(restaurantes[i].valorTotal);
    }
    return gastoTotal;
}

 restaurantes.mediaGastosTotais = function(){
    const total = restaurantes.calcularGastoTotal();
    const media = parseFloat(total)/parseInt(numRestaurantes);
    return media; 
}

restaurantes.maiorGasto = function(){
    let maiorValor = 0;
    let nomeMaiorValor;
    for (let i = 0; i < numRestaurantes; i++) {
        if(maiorValor<restaurantes[i].valorTotal){
            maiorValor = restaurantes[i].valorTotal;
            nomeMaiorValor = restaurantes[i].nome;
        }
        
    }

    for (let i = 0; i < numRestaurantes; i++) {
        if(nomeMaiorValor === restaurantes[i].nome){
            return restaurantes[i];
        }
    }
}

restaurantes.imprimir = function(){
    console.log(`Restaurantes visitados no feriado: ${numRestaurantes}`);
    console.log(`Lista de gastos:`);
    for (let i = 0; i < numRestaurantes; i++) {
        restaurantes[i].toString();
    }
   
    console.log(`Total gasto: ${restaurantes.calcularGastoTotal()}`);
    
    console.log(`Média de gastos: ${restaurantes.mediaGastosTotais()}`);

    const maior = restaurantes.maiorGasto();
    console.log(`Restaurante com maior gasto total: ${maior.nome}(${maior.valorTotal})`);
    

}

restaurantes.imprimir();



   





