twoSum = (arr,target) => {
  for(let i = 0; i < arr.length;i++) {
  for(let j = i; j <  arr.length;j++) {
    if( arr[i] + arr[j] === target) {
      return [i,j]
    }
  }  
  }
}

twoSum([2,7,8,,10,14],24)