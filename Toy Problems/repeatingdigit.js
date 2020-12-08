function isRepdigit(num) {
  let str = num.toString()
  let arr = str.split("")
   return num === 0 ||  arr.filter(x => x != "-").every(x => x === arr[1])
}

isRepdigit(-6667)