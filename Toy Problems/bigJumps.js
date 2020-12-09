function bigJump(h,bj) {
let minJumps = 0;
let remainder = h % bj
if(remainder === 0) {
  minJumps = h/bj
} 
else {
   minJumps = Math.floor(h/bj) + remainder  
}
return minJumps
}

bigJump(11,7)