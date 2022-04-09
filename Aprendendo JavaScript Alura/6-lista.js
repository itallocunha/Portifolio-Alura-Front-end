console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
    );
//adiciona itens na lista 
listaDeDestinos.push(`Rio Grande do Sul`);
console.log("Destinos possiveis:");
//console.log(saoPaulo, salvador,rioDeJaneiro);
console.log(listaDeDestinos);

// retira um item da lista
listaDeDestinos.splice(3,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1],listaDeDestinos[2]);
