function arrayMaximalAdjacentDifference(inputArray) {
let differenceArray = [];
for(let i = 1; i < inputArray.length-1; i++) {
differenceArray.push(inputArray[i] - inputArray[i + 1])
differenceArray.push(inputArray[i] - inputArray[i - 1])
}
return Math.max(...differenceArray)
}
arrayMaximalAdjacentDifference([10, 11, 12])