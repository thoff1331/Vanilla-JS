function commonCharacterCount(s1, s2) {
let count = 0
let s1Arr = []

for(let i = 0; i < s1.length;i++) {
  for(let j = 0; j < s2.length;j++) {
  s1Arr.push(s1[i])  
  }
}
return s1Arr
}