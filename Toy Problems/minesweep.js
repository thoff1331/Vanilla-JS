function minesweeper(matrix) {
 let count = []
 for(let i = 0; i < matrix.length;i++) {
     count.push([])
  for( let j = 0; j < matrix[i].length;j++) {
      count[i][j] = 0;
      //above
      if(matrix[i][j - 1] === true) {
          count[i][j]++
      }
      // below
      if(matrix[i][j + 1] !== undefined) {
          if(matrix[i][j + 1] === true) {
              count[i][j]++
          }
      }
      //left
      if(matrix[i - 1] !== undefined) {
          if(matrix[i -1][j] === true) {
              count[i][j]++
          }
      }
      //right
      if(matrix[i + 1] != undefined) {
          if(matrix[i + 1][j] === true) {
              count[i][j]++
          }
      }
      // down right
      if(matrix[i + 1] !== undefined) {
          if(matrix[i + 1][j+ 1] === true) {
              count[i][j]++
          }
      }
      // down
      if(matrix[i + 1] !== undefined) {
          if(matrix[i + 1][j - 1] === true) {
              count[i][j]++
          }
      }
      if(matrix[i -1] !== undefined) {
     if(matrix[i -1][j + 1] === true) {
       count[i][j]++  
     }
      }
      if(matrix[i - 1] !== undefined) {
          if(matrix[i - 1][j - 1] === true) {
              count[i][j]++
          }
      }
  }   
 }
 return count
}