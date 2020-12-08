function sortByHeight(a) {
let arr = a;
arr = arr.filter((el) => {
  if(el != -1) {
    return el
  }
}).sort((a,b)=> {
 return  a - b 
})
let indexVal = 0;
for(let i = 0; i < a.length; i++) {
  if(a[i] != -1) {
    a[i] = arr[indexVal];
    indexVal++
  }
}
return a
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
