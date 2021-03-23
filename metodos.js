const pessoa = {
    nome: 'helena',
    sobrenome: 'Maia',
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    },
    anoNascimento:1988,
    CalculaIdade : function(anoAtual){
        return parseInt(anoAtual) - parseInt(this.anoNascimento);
    }
};

console.log(pessoa);
console.log(pessoa.CalculaIdade(2021));


