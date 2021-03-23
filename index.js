const pessoa = {
    nome: 'Helena',
    sobrenome: 'Maia'
}

console.log(pessoa);
console.log(pessoa.nome);

console.log(`Nome completo: ${pessoa.nome} ${pessoa.sobrenome}`);

console.log(pessoa['nome']);

console.log(`Nome completo: ${pessoa["nome"]} ${pessoa["sobrenome"]}`);

const parcial = "sobre";

const atributoMostrar = `${parcial}nome`

console.log(`Valor atributo '${atributoMostrar}': ${pessoa[atributoMostrar]}`);

const gato = {
    nome: 'Albino',
    idade: 3,
    dono: pessoa, 
    veterinario: {
        nome: 'Doutora fabiola',
        especialidade: 'pediatria felina'
    },
    alimentosFavoritos: ['sache', 'ração', 'presunto']
};


console.log(gato);

console.log(gato.dono.sobrenome);

pessoa.sobrenome = 'karol';


console.log(gato.dono.sobrenome);

console.log(gato.alimentosFavoritos);

for (const alimento of gato.alimentosFavoritos) {
    console.log(`Alimento: ${alimento}`);
}

const veiculo ={
    modelo: 'Fusca',
    marca: 'VM'
}
console.log(veiculo.ano);
console.log(veiculo.modelo);

veiculo.ano = 1965;

console.log(veiculo.ano);
console.log(veiculo.modelo);
console.log(veiculo);
