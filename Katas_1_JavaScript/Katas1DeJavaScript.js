function oneThroughTwenty() {
    
   let meuRetorno = [];
   for (let counter = 1; counter <=20; counter++){
        meuRetorno.push(counter)
   }
    return meuRetorno;
}
console.log(oneThroughTwenty());
//call function oneThroughTwenty

function evensToTwenty() {
    
  let arrayDePares = []

  for (let i = 0; i < 21; i++){
    if(i % 2 === 0 ){
      arrayDePares.push(i)
    }
  }
  return arrayDePares;
}
console.log(evensToTwenty())
//call function evensToTwenty

function oddsToTwenty() {

   let arrayDeImpares = []
   
   for (let i = 0; i < 21; i++){
     if(i % 2 === 1){
       arrayDeImpares.push(i)
     }
   }
   return arrayDeImpares;
}
console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
    
  let arrayMultiplosDeCinco = []

  for (let i = 1; i <= 100; i++){
    if(i % 5 === 0 ){
     arrayMultiplosDeCinco.push(i) 
    }
  }
    
  return arrayMultiplosDeCinco  
}
console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
    
 let arrayQuadrado = []

 for (let i = 0; i <= 10; i ++){
   if (i * i){
     arrayQuadrado.push(i * i)
   }
 }
    return arrayQuadrado;
}
console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
    
  let meuRetorno = [];
  for (let counter = 20; counter >=0; counter--){
       meuRetorno.push(counter)
  }
   return meuRetorno;
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
    
  let arrayDePares = []

  for (let i = 20; i > 0; i--){
    if(i % 2 === 0 ){
      arrayDePares.push(i)
    }
  }
  return arrayDePares;
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
  let arrayDeImpares = []
   
  for (let i = 20; i > 0; i--){
    if(i % 2 === 1){
      arrayDeImpares.push(i)
    }
  }
  return arrayDeImpares;
}
console.log(oddNumbersBackwards())
//call function oddsToTwenty

function multiplesOfFiveBackwards() {
    
  let arrayMultiplosDeCinco = []

  for (let i = 100; i >= 0; i--){
    if(i % 5 === 0 ){
     arrayMultiplosDeCinco.push(i) 
    }
  }
    
  return arrayMultiplosDeCinco  
}
console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
  let arrayQuadrado = []

  for (let i = 10; i >= 0; i--){
    if (i * i){
      arrayQuadrado.push(i * i)
    }
  }
     return arrayQuadrado;
 }
 console.log(squareNumbersBackwards())
