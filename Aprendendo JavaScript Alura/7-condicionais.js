console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
    );

    const idadeComprador = 21;
//adiciona itens na lista 
listaDeDestinos.push(`Rio Grande do Sul`);
console.log("Destinos possiveis:");
//console.log(saoPaulo, salvador,rioDeJaneiro);
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    // retira um item da lista
    listaDeDestinos.splice(3,1);
}else{
    console.log("Não é maior de idade e não posso vender");

}
console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);

