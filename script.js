function oneThroughTwenty(num1a20) {
    for (let i = 1; i <= num1a20; i++){
      console.log(i)
    }
  }
  oneThroughTwenty(20)
  
  
  
  function evensToTwenty(numPar) {
      for (let i = 1; i <= numPar; i++) {
        if (i % 2 === 0){
          console.log(i)
        }
      }
  }
  evensToTwenty(20)
  
  
  
  
  function oddsToTwenty(numImpar) {
      
    for (let i = 1; i <= numImpar; i++) {
      if (i % 2 !== 0){
        console.log(i)
      }
    }
  }
  oddsToTwenty(20)
  
  
  
  
  function multiplesOfFive(multiplosDe5) {
      for (i = 5; i <= multiplosDe5; i++) {
          if (i % 5 == 0){
          console.log(i);
        }
      }
    }
  multiplesOfFive(100)
  
  
  function squareNumbers(numQuadrado) {
      for (let i = 1; i <= numQuadrado; i++) {
        if (Math.sqrt(i) % 1 === 0) {
          console.log(i)
        }
      }
  }
  squareNumbers(100)
  
  
  function countingBackwards(num20a1) {
      
    for (let i = 20; i >= num20a1; i--){
      console.log(i)
    }
  }
  countingBackwards(1)
  
  
  
  function evenNumbersBackwards(parInvertido) {
    for (let i = 20; i >= parInvertido; i--) {
      if (i % 2 === 0){
        console.log(i)
      }
    }
  }
  evenNumbersBackwards(1)
  
  
  
  function oddNumbersBackwards(imparInvertido) {
      
    for (let i = 20; i >= imparInvertido; i--) {
      if (i % 2 !== 0){
        console.log(i)
      }
    }
  }
  oddNumbersBackwards(1)
  
  
  
  function multiplesOfFiveBackwards(multDe5Invertido) {
      
    for (i = 100; i >= multDe5Invertido; i--) {
        if (i % 5 == 0) {
        console.log(i);
      }
    }
  }
  multiplesOfFiveBackwards(1) 
  
  
  
  function squareNumbersBackwards(numQuadradoInvertido) {
      
    for (let i = 100; i >= numQuadradoInvertido; i--) {
      if (Math.sqrt(i) % 1 === 0) {
        console.log(i)
      }
    }
  }
  squareNumbersBackwards(1)