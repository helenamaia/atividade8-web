const pessoa = {
    nome: 'helena',
    sobrenome: 'Maia',
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    },
    anoNascimento:1988,
    CalculaIdade : function(anoAtual){
        this.idade = parseInt(anoAtual) - parseInt(this.anoNascimento);
        return this.idade;
    }
};

console.log(pessoa);
console.log(pessoa.CalculaIdade(2021));
console.log(`Ìdade armazenada em atributo: ${pessoa.idade}`);



