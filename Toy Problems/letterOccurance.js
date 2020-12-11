function palindromeRearranging(inputString) {
const letterCount = {
    
}
let inputArray = inputString.split('')
for(let i = 0; i < inputArray.length;i++) {
  if(!letterCount.hasOwnProperty(inputArray[i]))  {
 letterCount[inputArray[i]] = 1
} else {
  letterCount[inputArray[i]] = (letterCount[inputArray[i]]+ 1) || 1
}
}
return letterCount
}

palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')