circleOfNumbers = (n,firstNumber) => {
  let numArray = [];
  let half = n / 2
  for(let i = 0; i < n; i++) {
    numArray.push(i)
  }
  if(firstNumber < firstNumber) {
    return numArray[firstNumber + half]
  } 
  return numArray[firstNumber - half]
  }
}