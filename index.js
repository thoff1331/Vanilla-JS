bigAndSmall = (arr) => {
  let arr2 = []

  arr2.push(Math.min(...arr))
  arr2.push(Math.max(...arr))
  return arr2
}

bigAndSmall([1,2,3,788])



