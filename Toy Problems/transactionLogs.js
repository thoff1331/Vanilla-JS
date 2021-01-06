 function transactionLogs(logs,threshold) {
let trans = {}
let thresholdBreakers = []
for(let i = 0 ; i < logs.length;i++) {

let newKey = logs[i][0] + logs[i][1]
if(trans.hasOwnProperty([newKey]) ){
  trans[newKey] = trans[newKey] + 1 
} else 
trans[newKey] = 1
}
for( const [key,value] of Object.entries(trans)) {
if (value >= threshold) {
  thresholdBreakers.push(key)
}
}

return thresholdBreakers.sort((a,b) => {
  return a  - b 
})
}


transactionLogs(['88,99,200',"88 99 300", "12 12 15"],2)