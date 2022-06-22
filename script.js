function oneThroughTwenty(num1a20) {
  let arrRetorno = []
  for (let i = 1; i <= num1a20; i++){
    arrRetorno.push(i)
  }
  return arrRetorno
}
oneThroughTwenty(20)
console.log(oneThroughTwenty(20))


function evensToTwenty(numPar) {
  let retornoPar = []
    for (let i = 1; i <= numPar; i++) {
      if (i % 2 === 0){
        retornoPar.push(i)
      }
    }
    return retornoPar
}
evensToTwenty(20)
console.log(evensToTwenty(20))




function oddsToTwenty(numImpar) {
  let retornoImpar = []
  for (let i = 1; i <= numImpar; i++) {
    if (i % 2 !== 0){
      retornoImpar.push(i)
    }
  }
  return retornoImpar
}
oddsToTwenty(20)
console.log(oddsToTwenty(20))




function multiplesOfFive(multiplosDe5) {
    let multiplo5 = []
    for (i = 5; i <= multiplosDe5; i++) {
        if (i % 5 == 0){
        multiplo5.push(i)
      }
    }
    return multiplo5
  }
multiplesOfFive(100)
console.log(multiplesOfFive(100))


function squareNumbers(numQuadrado) {
    let quadrado = []
    for (let i = 1; i <= numQuadrado; i++) {
      if (Math.sqrt(i) % 1 === 0) {
        quadrado.push(i)
      }
    }
    return quadrado
}
squareNumbers(100)
console.log(squareNumbers(100))

function countingBackwards(num20a1) {
   let backNum = [] 
   for (let i = 20; i >= num20a1; i--){
    backNum.push(i)
  }
  return backNum
}
countingBackwards(1)
console.log(countingBackwards(1))



function evenNumbersBackwards(parInvertido) {
  let parBack = []
  for (let i = 20; i >= parInvertido; i--) {
    if (i % 2 === 0){
      parBack.push(i)
    }
  }
  return parBack
}
evenNumbersBackwards(1)
console.log(evenNumbersBackwards(1))


function oddNumbersBackwards(imparInvertido) {
  let imparBack = []    
  for (let i = 20; i >= imparInvertido; i--) {
    if (i % 2 !== 0){
      imparBack.push(i)
    }
  }
  return imparBack
}
oddNumbersBackwards(1)
console.log(oddNumbersBackwards(1))


function multiplesOfFiveBackwards(multDe5Invertido) {
   let multiBack5 = [] 
  for (i = 100; i >= multDe5Invertido; i--) {
      if (i % 5 == 0) {
      multiBack5.push(i);
    }
  }
  return multiBack5
}
multiplesOfFiveBackwards(1) 
console.log(multiplesOfFiveBackwards(1))


function squareNumbersBackwards(numQuadradoInvertido) {
   let quadradoBack = [] 
  for (let i = 100; i >= numQuadradoInvertido; i--) {
    if (Math.sqrt(i) % 1 === 0) {
      quadradoBack.push(i)
    }
  }
  return quadradoBack
}
squareNumbersBackwards(1)
console.log(squareNumbersBackwards(1))