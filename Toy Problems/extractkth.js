 function extractKth(arr) {
return arr.filter((el,index) => {
  return (index + 1) % k != 0
})
}

extractKth([1,2,3,4,5,6,7,8,9])