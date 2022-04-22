console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
    );

    
    const idadeComprador = 21;
    const estaAcompanhada = true;
    const temPassagemComprada = true;

//adiciona itens na lista 
listaDeDestinos.push(`Rio Grande do Sul`);
console.log("Destinos possiveis:");
//console.log(saoPaulo, salvador,rioDeJaneiro);
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true){
        console.log("Comprador esta acompanhado");
        listaDeDestinos.splice(1,1); //remove item
}else{
        console.log("Não é maior de idade e não posso vender");
    }
console.log("Embarque: \n\n");
if (idadeComprador > 18 && temPassagemComprada){
    console.log("Boa Viagem!");

}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
