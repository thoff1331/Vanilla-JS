function differentSymbolsNaive(s) {
let arr = s.split('')
let occured = [arr[0]]
let symbols = 1

for(let i = 1; i < arr.length;i++) {
  if(!occured.includes(arr[i])) {
    occured.push(arr[i])
   symbols++   
  }
}
return symbols
}

differentSymbolsNaive('cabca')