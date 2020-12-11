function palindromeRearranging(inputString) {
const letterCount = {
    
}
let inputArray = inputString.split('')
for(let i = 0; i < inputArray.length;i++) {
  if(!letterCount.hasOwnProperty(inputArray[i]))  {
 letterCount[inputArray[i]] = 1
} else {
  letterCount[inputArray[i]]++
}
}
let count = 0
for(val in letterCount) {
  if(letterCount[val] % 2 != 0)  {
count++
  }
}
return count > 1 ? false : true
}

palindromeRearranging('babe')