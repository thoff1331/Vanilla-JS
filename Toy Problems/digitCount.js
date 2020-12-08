function count(n) {
  console.log
  let string = n.toString()
  const negative = string.startsWith('-')
 return negative ?  string.length - 1 :  string.length
}

count(-788)