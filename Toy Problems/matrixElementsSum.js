
function matrixElementsSum(matrix) {
let  priceTotal = 0;
let  badIndex = [];
for(let i = 0;i < matrix.length;i++){
for(let j = 0; j < matrix[i].length;j++) {
if(matrix[i][j] === 0) {
  badIndex.push(j)
} else if(badIndex.indexOf(j) === -1) {
priceTotal += matrix[i][j]
}
}
}  
return priceTotal
}

matrixElementsSum( [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]])