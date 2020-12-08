function addMissing(arr) {
 let sortedArr = arr.sort()
 let count = 0
 for(let i = 0; i < sortedArr.length;i++;) {
 if(sortedArr[i + 1] - sortedArr[i] != 1 ) {
 count++  
 }
 return count  
 }


addMissing([0, 3])
