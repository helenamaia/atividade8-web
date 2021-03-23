const  nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
};

const CalculaIdade = function(anoAtual){
    this.idade = parseInt(anoAtual) - parseInt(this.anoNascimento);
    return this.idade;
};

const pessoa = {
    nome: 'helena',
    sobrenome: 'Maia',
    nomeCompleto: nomeCompleto,
    anoNascimento:2003,
    CalculaIdade,
};

console.log(pessoa);
console.log(pessoa.CalculaIdade(2021));
console.log(`Ìdade armazenada em atributo: ${pessoa.idade}`);

const outraPessoa = {
    nome: 'Murilo',
    sobrenome: 'Amancio',
    anoNascimento: 1999,
}

outraPessoa.nomeCompleto = nomeCompleto;
outraPessoa.CalculaIdade = CalculaIdade;

console.log(outraPessoa);
console.log(outraPessoa.CalculaIdade(2021));
console.log(`Ìdade armazenada em atributo: ${outraPessoa.idade}`);

const pessoas = ['helena', 'albino', 'morfeu', 'violeta', 'nego', 'tigrinho'];
pessoas. imprimir = function(){
    for (const pessoa of pessoas) {
        console.log(`pessoa: ${pessoa}`);
    }
}

pessoas.imprimir();