function arrayChange(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
  if(arr[i ]>= arr[i + 1]) {
    let difference = arr[i] + 1 -  arr[i + 1 ] 
    arr[i + 1] =  arr[i] + 1;
    count += difference 
  }  
  }
  return count
}

arrayChange([1, 1, 1])