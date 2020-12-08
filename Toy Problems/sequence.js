function makeArrayConsecutive2(statues) {
 statues.sort((a,b) => a - b)
let min = statues[0]
let max = statues[statues.length -1]
let count = 0
for(let i = min; i < max; i++) {
  if(statues.indexOf(i) === -1) {
    count++
  }
}
 return count``
}
makeArrayConsecutive2([1,99])

// makeArrayConsecutive2([1,4])
//  statues.sort((a,b) => a - b)
// let min = statues[0]
// let max = statues[status.length -1]
// let count = 0
// for(let i = min; )
// return count
