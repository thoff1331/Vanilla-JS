toOrdinal = num => {
  const lastNum = num.toString().split("").pop()
  if(lastNum == 1 && num != 11 && num != 111) {
    return num + "st"
  } else if(lastNum == 2 && num != 12){
    return  num + "nd"
 } else if (lastNum == 3) {
   return num + 'rd'
 } else if(num >= 4 && num <= 19) {
   return num + 'th'
 } else {
   return num + 'th'
 }
}
toOrdinal(111)