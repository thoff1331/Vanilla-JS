// fib = n => {
//   let arr = [1]
//   let a = 1;
//   let b = 1
//   for(let i = 2; i < n; i++) {
//     let c = a + b
//     a = b
//     b = c
//     arr.push(b)
//   }
//   return b
// }

// fib(3)

biggestNum = arr => {
let num = arr[0]  
for(let i = 1; i < arr.length;i++) {
  if(arr[i] > num) {
    num = arr[i]
  }
}
return num
}

biggestNum([1,2,3,4000,4,5,88,101])